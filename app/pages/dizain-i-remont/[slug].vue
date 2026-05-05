<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="inner-page">
      <section class="section-offset">
        <div class="container page-hero">
          <div>
            <p class="eyebrow">Кейс проекта</p>
            <h1>{{ project.title }}</h1>
            <p class="page-lead">{{ project.summary }}</p>

            <div class="project-tags project-tags-large">
              <span>Локация: {{ project.location }}</span>
              <span>Площадь: {{ project.area }}</span>
              <span>Бюджет: {{ project.budget }}</span>
              <span>Срок: {{ project.duration }}</span>
            </div>
          </div>
          <img
            :src="project.image"
            :alt="project.title"
            class="page-hero-image"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section class="section-offset">
        <div class="container details-box">
          <h2>Что было сделано</h2>
          <ul class="details-list">
            <li v-for="item in project.highlights" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>

      <section class="section-offset">
        <div class="container cta-box">
          <h2>Нужен похожий результат?</h2>
          <p>Подберем решение под ваши сроки и бюджет, с понятной сметой и договором.</p>
          <NuxtLink class="btn btn-primary" to="/#contact">
            Обсудить проект
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { projectCases, siteData } from "@/data";

const route = useRoute();
const slug = computed(() => route.params.slug?.toString() || "");

const project = computed(() => {
  const found = projectCases.find((item) => item.slug === slug.value);
  if (!found) {
    throw createError({ statusCode: 404, statusMessage: "Проект не найден" });
  }
  return found;
});

useSeoMeta(() => {
  const pageTitle = `${project.value.title} | remdom22.ru`;
  const pageDescription = `${project.value.summary} Площадь: ${project.value.area}, срок: ${project.value.duration}, бюджет: ${project.value.budget}.`;
  const pageUrl = `${siteData.siteUrl}/dizain-i-remont/${slug.value}`;

  return {
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogType: "article",
    ogUrl: pageUrl,
  };
});

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: `${siteData.siteUrl}/dizain-i-remont/${slug.value}`,
    },
  ],
}));
</script>
