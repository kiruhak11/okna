<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="inner-page">
      <section class="section-offset">
        <div class="container page-hero">
          <div>
            <p class="eyebrow">Услуги</p>
            <h1>Услуги по ремонту и дизайну интерьеров</h1>
            <p class="page-lead">
              Комплексные и частичные работы для квартир, домов и офисов: от
              замера и проекта до финишной отделки.
            </p>
          </div>
          <BlurImage
            src="/illustrations/photo_succ/collection-05/IMG_20200716_123026.jpg"
            alt="Услуги по ремонту"
            class="page-hero-image photo-cover"
            sizes="(max-width: 1080px) calc(100vw - 1rem), 520px"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </section>

      <section class="section-offset">
        <div class="container services-grid">
          <article
            v-for="service in siteData.services"
            :key="service.title"
            class="service-card"
            :class="{ highlight: service.highlight }"
          >
            <img
              :src="service.icon"
              :alt="service.title"
              class="service-icon"
              loading="lazy"
              decoding="async"
            />
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <div class="service-price">{{ service.fromPrice }}</div>
            <p class="service-price-note">{{ service.priceNote }}</p>
          </article>
        </div>
        <p class="price-disclaimer">
          Точную стоимость рассчитываем после замера и согласовываем в договоре.
        </p>
      </section>

      <section class="section-offset">
        <div class="container cta-box">
          <h2>Не нашли точный пункт?</h2>
          <p>Опишите задачу, и мы подготовим индивидуальное решение под ваш объект.</p>
          <NuxtLink class="btn btn-primary" to="/#contact">
            Оставить заявку
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { siteData } from "@/data";

const pageTitle = "Услуги по ремонту и дизайну | remdom22.ru";
const pageDescription =
  "Комплексные и частичные услуги по ремонту и дизайну интерьеров в Барнауле: консультация, отделка, электрика и санузлы под ключ.";

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: "website",
  ogUrl: `${siteData.siteUrl}/uslugi-po-remontu-i-dizainu`,
});

useHead({
  link: [
    { rel: "canonical", href: `${siteData.siteUrl}/uslugi-po-remontu-i-dizainu` },
  ],
});
</script>
