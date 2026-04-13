export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const config = useRuntimeConfig(event);
  const telegramBotToken = normalizeString(config.telegramBotToken, 200);
  const chatIds = collectChatIds([
    config.telegramChatId,
    config.telegramChatId1,
    config.telegramChatId2,
  ]);

  const data =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const name = normalizeString(data.name, 80);
  const phone = normalizeString(data.phone, 30);
  const service = normalizeString(data.service, 120);
  const messageText = normalizeString(data.message, 1000);

  if (!name || !phone || !messageText) {
    setResponseStatus(event, 400);
    return {
      success: false,
      message: "Пожалуйста, заполните имя, телефон и сообщение.",
    };
  }

  if (!telegramBotToken || chatIds.length === 0) {
    console.error("Telegram configuration missing:", {
      hasToken: !!telegramBotToken,
      chatIdsCount: chatIds.length,
    });
    return {
      success: false,
      message: "Сервис заявок временно недоступен. Позвоните по номеру на сайте.",
    };
  }

  const message = `
🎯 Новая заявка с сайта

👤 Имя: ${name}
📞 Телефон: ${phone}
🛠️ Услуга: ${service || "Не указана"}

💬 Сообщение:
${messageText}

⏰ Время: ${new Date().toLocaleString("ru-RU")}
  `.trim();

  const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const results: Array<{ chatId: string; success: boolean; error?: string }> =
    [];

  for (const chatId of chatIds) {
    try {
      const response = await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.ok) {
        results.push({ chatId, success: true });
      } else {
        const errorText =
          typeof responseData?.description === "string"
            ? responseData.description
            : "Telegram API error";
        results.push({ chatId, success: false, error: errorText });
      }
    } catch (error: any) {
      const errorText =
        error && typeof error.message === "string"
          ? error.message
          : "Network error";
      results.push({ chatId, success: false, error: errorText });
    }
  }

  const successCount = results.filter((item) => item.success).length;
  const failedCount = results.length - successCount;

  console.log("📊 Результат отправки:", {
    total: results.length,
    successful: successCount,
    failed: failedCount,
    details: results,
  });

  if (successCount > 0) {
    return {
      success: true,
      message: "Заявка успешно отправлена. Мы скоро свяжемся с вами.",
    };
  }

  setResponseStatus(event, 502);
  return {
    success: false,
    message:
      "Не удалось отправить заявку автоматически. Позвоните по номеру на сайте.",
  };
});

function normalizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  return trimmed.slice(0, maxLength);
}

function collectChatIds(values: unknown[]): string[] {
  const result: string[] = [];
  for (const value of values) {
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    if (!result.includes(trimmed)) {
      result.push(trimmed);
    }
  }
  return result;
}
