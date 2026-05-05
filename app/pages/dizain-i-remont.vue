<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="inner-page">
      <section class="section-offset">
        <div class="container page-hero">
          <div>
            <p class="eyebrow">Проекты</p>
            <h1>Дизайн и ремонт: реализованные кейсы</h1>
            <p class="page-lead">
              Подборка проектов с разной площадью и бюджетом. Каждый кейс
              описывает задачу, сроки и ключевые решения.
            </p>
          </div>
          <img
            src="/illustrations/projects-main.svg"
            alt="Портфолио проектов"
            class="page-hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section class="section-offset">
        <div class="container project-grid project-grid-full">
          <NuxtLink
            v-for="project in projectCases"
            :key="project.slug"
            :to="`/dizain-i-remont/${project.slug}`"
            class="project-card"
          >
            <img :src="project.image" :alt="project.title" loading="lazy" decoding="async" />
            <div class="project-meta">
              <h2>{{ project.title }}</h2>
              <p>{{ project.summary }}</p>
              <div class="project-tags">
                <span>{{ project.area }}</span>
                <span>{{ project.budget }}</span>
                <span>{{ project.duration }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { projectCases, siteData } from "@/data";

const pageTitle = "Дизайн и ремонт: проекты | remdom22.ru";
const pageDescription =
  "Портфолио реализованных проектов по дизайну и ремонту в Барнауле: площади, сроки, бюджеты и ключевые решения.";

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: "website",
  ogUrl: `${siteData.siteUrl}/dizain-i-remont`,
});

useHead({
  link: [{ rel: "canonical", href: `${siteData.siteUrl}/dizain-i-remont` }],
});
</script>
