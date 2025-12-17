export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Получаем переменные окружения
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
  const telegramChatId = process.env.TELEGRAM_CHAT_ID

  // Проверяем наличие обязательных переменных
  if (!telegramBotToken || !telegramChatId) {
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
        text: message,
        parse_mode: 'HTML'
      })
    })

    const data = await response.json()

    if (data.ok) {
      return {
        success: true,
        message: 'Заявка успешно отправлена!'
      }
    } else {
      console.error('Telegram API error:', data)
      return {
        success: false,
        message: 'Ошибка при отправке сообщения в Telegram'
      }
    }
  } catch (error: any) {
    console.error('Error sending to Telegram:', error)
    return {
      success: false,
      message: 'Произошла ошибка при отправке заявки'
    }
  }
})


