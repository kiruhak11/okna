// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  telemetry: false,

  srcDir: "app/",

  // Глобальные стили (фактически лежат в app/assets/scss)
  css: ["@/assets/scss/main.scss"],

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
    telegramChatId1: process.env.TELEGRAM_CHAT_ID_1 || '1919551727',
    telegramChatId2: process.env.TELEGRAM_CHAT_ID_2 || '502773482',
    secretRegistrationCode: process.env.SECRET_REGISTRATION_CODE,
    public: {
      apiBase: process.env.API_BASE_URL || "http://localhost:3000",
    },
  },

  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },

  nitro: {
    experimental: {
      openAPI: true,
    },
    // Настройки для работы с Nginx reverse proxy
    // Приложение будет слушать на 0.0.0.0:3000 внутри контейнера
    // Nginx будет проксировать с порта 3025 на порт 3000 контейнера
    // Переменные окружения доступны напрямую в серверных роутах
    runtimeConfig: {
      telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
      telegramChatId: process.env.TELEGRAM_CHAT_ID,
      telegramChatId1: process.env.TELEGRAM_CHAT_ID_1 || '1919551727',
      telegramChatId2: process.env.TELEGRAM_CHAT_ID_2 || '502773482',
    },
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          type: 'text/javascript',
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106110599, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `,
        },
        {
          type: 'text/javascript',
          src: 'https://mc.yandex.ru/metrika/tag.js',
          async: true,
        }
      ],
      noscript: [
        {
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/106110599" style="position:absolute; left:-9999px;" alt="" /></div>',
        }
      ]
    }
  },
});
