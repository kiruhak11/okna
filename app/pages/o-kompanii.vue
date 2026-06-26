<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="inner-page">
      <section class="section-offset">
        <div class="container page-hero">
          <div>
            <p class="eyebrow">О компании</p>
            <h1>Команда, которая доводит проект до результата</h1>
            <p class="page-lead">
              Работаем в Барнауле и Алтайском крае. Берем на себя ремонт,
              дизайн и строительные задачи с прозрачной коммуникацией и
              ежедневным контролем качества.
            </p>
          </div>
          <BlurImage
            src="/illustrations/photo_succ/collection-02/IMG_20241122_170122.jpg"
            alt="Команда и процесс работы"
            class="page-hero-image photo-cover"
            sizes="(max-width: 1080px) calc(100vw - 1rem), 520px"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </section>

      <section class="section-offset">
        <div class="container card-grid">
          <article v-for="fact in companyFacts" :key="fact.title" class="info-card">
            <img :src="fact.icon" :alt="fact.title" loading="lazy" decoding="async" />
            <h2>{{ fact.title }}</h2>
            <p>{{ fact.description }}</p>
          </article>
        </div>
      </section>

      <section class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Как мы работаем</p>
            <h2>Процесс без сюрпризов и скрытых этапов</h2>
          </div>

          <div class="process-grid">
            <article
              v-for="(stage, index) in siteData.stages"
              :key="stage.title"
              class="process-card"
            >
              <div class="process-index">{{ formatStageNumber(index + 1) }}</div>
              <h3>{{ stage.title }}</h3>
              <p>{{ stage.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section-offset">
        <div class="container details-box">
          <h2>Реквизиты и документы</h2>
          <p class="details-text">
            Работы выполняются силами нашей бригады. Договор и закрывающие
            документы оформляются через партнерскую организацию; реквизиты
            указываем в договоре перед стартом работ. Все обязательства перед
            вами сохраняются в полном объеме.
          </p>
        </div>
      </section>

      <section class="section-offset">
        <div class="container cta-box">
          <h2>Готовы обсудить ваш проект?</h2>
          <p>
            Оставьте заявку на главной странице, и мы предложим рабочий план с
            понятными сроками.
          </p>
          <NuxtLink class="btn btn-primary" to="/#contact">
            Перейти к заявке
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { companyFacts, siteData } from "@/data";

const formatStageNumber = (value: number) => value.toString().padStart(2, "0");

const pageTitle = "О компании | remdom22.ru";
const pageDescription =
  "Команда remdom22.ru: ремонт, дизайн и строительные работы в Барнауле с прозрачными этапами, сметой и договором.";

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: "website",
  ogUrl: `${siteData.siteUrl}/o-kompanii`,
});

useHead({
  link: [{ rel: "canonical", href: `${siteData.siteUrl}/o-kompanii` }],
});
</script>
