import nodemailer from "nodemailer";

const DEFAULT_SMTP_HOST = "smtp.yandex.ru";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_RECEIVER_EMAIL = "remdom.22@yandex.com";
const MAX_EMAIL_LENGTH = 200;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  const name = normalizeString(data.name, 80) || "Клиент сайта";
  const phone = normalizeString(data.phone, 30);
  const email = normalizeString(data.email, 120);
  const service = normalizeString(data.service, 120);
  const messageText =
    normalizeString(data.message, 1000) ||
    normalizeString(data.comment, 1000) ||
    normalizeString(data.question, 1000) ||
    normalizeString(data.details, 1000) ||
    "Комментарий не указан.";

  if (!phone && !email) {
    setResponseStatus(event, 400);
    return {
      success: false,
      message: "Пожалуйста, укажите телефон или email для связи.",
    };
  }

  const config = useRuntimeConfig(event);
  const smtpHost =
    normalizeString(config.smtpHost, MAX_EMAIL_LENGTH) || DEFAULT_SMTP_HOST;
  const smtpPort = normalizeNumber(config.smtpPort, DEFAULT_SMTP_PORT);
  const smtpSecure = normalizeBoolean(config.smtpSecure, smtpPort === 465);
  const smtpUser = normalizeString(config.smtpUser, MAX_EMAIL_LENGTH);
  const smtpPass = normalizeString(config.smtpPass, MAX_EMAIL_LENGTH);
  const smtpFrom =
    normalizeString(config.smtpFrom, MAX_EMAIL_LENGTH) || smtpUser;
  const smtpTo =
    normalizeString(config.smtpTo, MAX_EMAIL_LENGTH) || DEFAULT_RECEIVER_EMAIL;

  if (!smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
    console.error("SMTP configuration is incomplete", {
      hasSmtpUser: !!smtpUser,
      hasSmtpPass: !!smtpPass,
      hasSmtpFrom: !!smtpFrom,
      hasSmtpTo: !!smtpTo,
    });

    setResponseStatus(event, 503);
    return {
      success: false,
      message:
        "Сервис заявок временно недоступен. Позвоните по номеру на сайте.",
    };
  }

  const requestIp = getRequestIP(event, { xForwardedFor: true }) || "Неизвестно";
  const submittedAt = new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: "Asia/Barnaul",
  }).format(new Date());

  const plainTextMessage = [
    "Новая заявка с сайта remdom22.ru",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone || "Не указан"}`,
    `Email: ${email || "Не указан"}`,
    `Услуга: ${service || "Не указана"}`,
    "",
    "Сообщение:",
    messageText,
    "",
    `IP: ${requestIp}`,
    `Время: ${submittedAt}`,
  ].join("\n");

  const htmlMessage = `
    <h2>Новая заявка с сайта remdom22.ru</h2>
    <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
    <p><strong>Телефон:</strong> ${escapeHtml(phone || "Не указан")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "Не указан")}</p>
    <p><strong>Услуга:</strong> ${escapeHtml(service || "Не указана")}</p>
    <p><strong>Сообщение:</strong><br>${escapeHtml(messageText).replace(/\n/g, "<br>")}</p>
    <hr>
    <p><strong>IP:</strong> ${escapeHtml(requestIp)}</p>
    <p><strong>Время:</strong> ${escapeHtml(submittedAt)}</p>
  `.trim();

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      subject: "Новая заявка с сайта remdom22.ru",
      text: plainTextMessage,
      html: htmlMessage,
    });

    return {
      success: true,
      message: "Заявка успешно отправлена. Мы скоро свяжемся с вами.",
    };
  } catch (error: any) {
    console.error("SMTP send error", {
      message: error?.message,
      code: error?.code,
    });

    setResponseStatus(event, 502);
    return {
      success: false,
      message:
        "Не удалось отправить заявку автоматически. Позвоните по номеру на сайте.",
    };
  }
});

function normalizeString(value: unknown, maxLength: number): string {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return "";
    return trimmed.slice(0, maxLength);
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const normalized = normalizeString(item, maxLength);
      if (normalized) return normalized;
    }
  }

  return "";
}

function normalizeNumber(value: unknown, fallbackValue: number): number {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    return Math.trunc(value);
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    if (Number.isFinite(parsed) && parsed > 0) {
      return Math.trunc(parsed);
    }
  }

  return fallbackValue;
}

function normalizeBoolean(value: unknown, fallbackValue: boolean): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value !== "string") return fallbackValue;

  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;

  return fallbackValue;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
