<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="inner-page">
      <section class="section-offset">
        <div class="container page-hero page-hero-text">
          <div>
            <p class="eyebrow">Проекты</p>
            <h1>Дизайн и ремонт: реализованные кейсы</h1>
            <p class="page-lead">
              Подборка реальных фотографий готовых работ. Подробные данные по
              объектам добавим после согласования формулировок.
            </p>
          </div>
        </div>
      </section>

      <section class="section-offset">
        <div class="container project-grid project-grid-full">
          <NuxtLink
            v-for="project in projectCases"
            :key="project.slug"
            :to="`/dizain-i-remont/${project.slug}#collection`"
            class="project-card"
          >
            <BlurImage
              :src="project.image"
              :alt="project.title"
              sizes="(max-width: 620px) calc(100vw - 1rem), (max-width: 1080px) calc((100vw - 2rem) / 2), 380px"
              loading="lazy"
              decoding="async"
            />
            <div class="project-meta">
              <h2>{{ project.title }}</h2>
              <p>Фото выполненного объекта из портфолио.</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Галерея</p>
            <h2>Все фото готовых работ</h2>
            <p>
              Реальные объекты из портфолио. Используйте галерею как ориентир по
              стилю, деталям и качеству исполнения.
            </p>
          </div>

          <div v-if="galleryCollections.length" class="gallery-collections">
            <section
              v-for="collection in galleryCollections"
              :key="collection.id"
              class="gallery-collection"
            >
              <div class="gallery-collection-head">
                <h3>{{ collection.title }}</h3>
                <p>{{ collection.total }} фото</p>
              </div>

              <div v-if="collection.photos.length" class="success-gallery">
                <figure
                  v-for="photo in collection.photos"
                  :key="photo.src"
                  class="success-gallery-item"
                >
                  <BlurImage
                    :src="photo.src"
                    :alt="photo.alt"
                    :width="photo.width"
                    :height="photo.height"
                    sizes="(max-width: 760px) calc(100vw - 1rem), (max-width: 960px) calc((100vw - 2rem) / 2), 320px"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
              <p v-else class="gallery-empty">В этой коллекции пока нет фото.</p>
            </section>
          </div>
          <p v-else class="gallery-empty">Фото готовых работ скоро появятся в галерее.</p>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { projectCases, siteData } from "@/data";

type GalleryPhoto = {
  src: string;
  alt: string;
  fileName: string;
  width?: number;
  height?: number;
};

type GalleryCollection = {
  id: string;
  order: number;
  title: string;
  total: number;
  photos: GalleryPhoto[];
};

const { data: galleryCollections } = await useFetch<GalleryCollection[]>("/api/success-gallery", {
  default: () => [],
});

const pageTitle = "Дизайн и ремонт: проекты | remdom22.ru";
const pageDescription =
  "Портфолио реализованных проектов по дизайну и ремонту в Барнауле: фото готовых работ и объектов из практики команды.";

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
