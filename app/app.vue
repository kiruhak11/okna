<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ремонт окон в Барнауле | Оконный Мастер',
  meta: [
    { name: 'description', content: 'Профессиональный ремонт и обслуживание пластиковых окон в Барнауле. Выезд в день обращения. Опыт более 10 лет. Гарантия качества.' },
    { name: 'keywords', content: 'ремонт окон, окна Барнаул, ремонт пластиковых окон, регулировка окон, замена фурнитуры, утепление окон' },
    { name: 'author', content: 'Дмитрий, частный мастер' },
    { property: 'og:title', content: 'Ремонт окон в Барнауле | Оконный Мастер' },
    { property: 'og:description', content: 'Профессиональный ремонт и обслуживание окон. Выезд в день обращения. Опыт 10+ лет.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://okna-brn.ru' },
    { property: 'og:image', content: 'https://okna-brn.ru/logo.svg' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#8b5cf6' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
  htmlAttrs: {
    lang: 'ru',
  },
});
</script>
