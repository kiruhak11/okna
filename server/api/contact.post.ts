export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Получаем переменные окружения через runtimeConfig
  const config = useRuntimeConfig(event)
  const telegramBotToken = config.telegramBotToken
  const telegramChatId = config.telegramChatId

  // Проверяем наличие обязательных переменных
  if (!telegramBotToken || !telegramChatId) {
    console.error('Telegram configuration missing:', {
      hasToken: !!telegramBotToken,
      hasChatId: !!telegramChatId
    })
    return {
      success: false,
      message: 'Telegram бот не настроен. Пожалуйста, свяжитесь с администратором.'
    }
  }

  // Формируем сообщение для Telegram
  const message = `
🎯 Новая заявка с сайта

👤 Имя: ${body.name || 'Не указано'}
📞 Телефон: ${body.phone || 'Не указан'}
🛠️ Услуга: ${body.service || 'Не указана'}

💬 Сообщение:
${body.message || 'Без сообщения'}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
  `.trim()

  try {
    // Отправляем сообщение в Telegram
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Telegram API HTTP error:', {
        status: response.status,
        statusText: response.statusText,
        data: data
      })
      return {
        success: false,
        message: data.description || 'Ошибка при отправке сообщения в Telegram. Проверьте настройки бота.'
      }
    }

    if (data.ok) {
      return {
        success: true,
        message: 'Заявка успешно отправлена!'
      }
    } else {
      console.error('Telegram API error:', data)
      return {
        success: false,
        message: data.description || 'Ошибка при отправке сообщения в Telegram'
      }
    }
  } catch (error: any) {
    console.error('Error sending to Telegram:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })
    return {
      success: false,
      message: 'Произошла ошибка при отправке заявки. Попробуйте позже или позвоните нам.'
    }
  }
})


