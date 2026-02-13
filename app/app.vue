<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { siteData } from "@/data";

useHead({
  title: 'Ремонт окон в Барнауле | Оконный Мастер',
  meta: [
    { name: 'description', content: 'Ремонт и обслуживание окон в Барнауле. Выезд в день обращения, гарантия, честная смета. Оставьте заявку — свяжусь с вами.' },
    { name: 'keywords', content: 'ремонт окон Барнаул, ремонт пластиковых окон, регулировка окон, замена фурнитуры, утепление окон, мастер по окнам' },
    { name: 'author', content: siteData.masterName },
    // Гео-теги для Яндекса
    { name: 'geo.region', content: 'RU-ALT' },
    { name: 'geo.placename', content: 'Барнаул' },
    { name: 'geo.position', content: '53.356176;83.763199' },
    // Open Graph
    { property: 'og:title', content: 'Ремонт окон в Барнауле | Оконный Мастер' },
    { property: 'og:description', content: 'Ремонт и обслуживание окон. Выезд в день обращения. Гарантия и честная смета.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://okna-brn.ru' },
    { property: 'og:image', content: 'https://okna-brn.ru/logo.svg' },
    { property: 'og:site_name', content: 'Оконный Мастер Барнаул' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0f172a' },
  ],
  link: [
    // Основная фавиконка (ICO формат для старых браузеров)
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // Современная фавиконка в SVG (масштабируемая)
    { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
    // Фавиконка для iOS устройств
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.svg' },
    // Shortcut icon для лучшей совместимости
    { rel: 'shortcut icon', href: '/favicon.ico' },
    // Web App Manifest для PWA и SEO
    { rel: 'manifest', href: '/site.webmanifest' },
    // Canonical URL
    { rel: 'canonical', href: 'https://okna-brn.ru' },
  ],
  script: [
    {
      type: 'text/javascript',
      innerHTML: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106110599', 'ym');
      
      ym(106110599, 'init', {ssr:true, webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});`
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ремонт окон в Барнауле",
        "description": "Ремонт и обслуживание окон в Барнауле. Выезд в день обращения, гарантия, честная смета.",
        "url": "https://okna-brn.ru",
        "telephone": siteData.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Барнаул",
          "addressRegion": "Алтайский край",
          "addressCountry": "RU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.356176",
          "longitude": "83.763199"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        },
        "priceRange": "$$",
        "image": "https://okna-brn.ru/logo.svg",
        "areaServed": "Барнаул и пригород",
        "sameAs": []
      })
    }
  ],
  noscript: [
    {
      innerHTML: '<div><img src="https://mc.yandex.ru/watch/106110599" style="position:absolute; left:-9999px;" alt="" /></div>'
    }
  ],
  htmlAttrs: {
    lang: 'ru',
  },
});
</script>
