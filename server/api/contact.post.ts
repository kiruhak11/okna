export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Получаем переменные окружения через runtimeConfig
  const config = useRuntimeConfig(event)
  const telegramBotToken = config.telegramBotToken
  const telegramChatId1 = config.telegramChatId1
  const telegramChatId2 = config.telegramChatId2

  const data =
    body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  const name = normalizeString(data.name, 80)
  const phone = normalizeString(data.phone, 30)
  const service = normalizeString(data.service, 120)
  const messageText = normalizeString(data.message, 1000)

  if (!name || !phone || !messageText) {
    setResponseStatus(event, 400)
    return {
      success: false,
      message: 'Пожалуйста, заполните имя, телефон и сообщение.'
    }
  }

  // Проверяем наличие обязательных переменных
  if (!telegramBotToken || (!telegramChatId1 && !telegramChatId2)) {
    console.error('Telegram configuration missing:', {
      hasToken: !!telegramBotToken,
      hasChatId1: !!telegramChatId1,
      hasChatId2: !!telegramChatId2
    })
    return {
      success: false,
      message: 'Telegram бот не настроен. Пожалуйста, свяжитесь с администратором.'
    }
  }

  // Формируем сообщение для Telegram
  const message = `
🎯 Новая заявка с сайта

👤 Имя: ${name}
📞 Телефон: ${phone}
🛠️ Услуга: ${service || 'Не указана'}

💬 Сообщение:
${messageText}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
  `.trim()

  const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`
  const results = []
  let allSuccessful = true

  try {
    // Отправляем в первый чат
    if (telegramChatId1) {
      console.log(`📤 Отправка заявки в чат ${telegramChatId1}...`)
      
      const response1 = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: telegramChatId1,
          text: message
        })
      })

      const data1 = await response1.json()

      if (response1.ok && data1.ok) {
        console.log(`✅ Отправлено в чат ${telegramChatId1}`)
        results.push({ chatId: telegramChatId1, success: true })
      } else {
        console.error(`❌ Ошибка отправки в чат ${telegramChatId1}:`, data1)
        results.push({ chatId: telegramChatId1, success: false, error: data1.description })
        allSuccessful = false
      }
    }

    // Отправляем во второй чат
    if (telegramChatId2) {
      console.log(`📤 Отправка заявки в чат ${telegramChatId2}...`)
      
      const response2 = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: telegramChatId2,
          text: message
        })
      })

      const data2 = await response2.json()

      if (response2.ok && data2.ok) {
        console.log(`✅ Отправлено в чат ${telegramChatId2}`)
        results.push({ chatId: telegramChatId2, success: true })
      } else {
        console.error(`❌ Ошибка отправки в чат ${telegramChatId2}:`, data2)
        results.push({ chatId: telegramChatId2, success: false, error: data2.description })
        allSuccessful = false
      }
    }

    // Итоговое логирование
    console.log('📊 Результат отправки:', {
      total: results.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      details: results
    })

    if (allSuccessful && results.length > 0) {
      return {
        success: true,
        message: 'Заявка успешно отправлена!',
        details: results
      }
    } else if (results.some(r => r.success)) {
      return {
        success: true,
        message: 'Заявка частично отправлена. Мы получили ваше обращение.',
        details: results
      }
    } else {
      return {
        success: false,
        message: 'Ошибка при отправке заявки. Попробуйте позвонить мне.',
        details: results
      }
    }
  } catch (error: any) {
    console.error('❌ Критическая ошибка при отправке в Telegram:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })
    return {
      success: false,
      message: 'Произошла ошибка при отправке заявки. Попробуйте позже или позвоните мне.'
    }
  }
})

function normalizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.slice(0, maxLength)
}
