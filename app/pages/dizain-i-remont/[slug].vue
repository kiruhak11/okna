<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="inner-page">
      <section class="section-offset">
        <div class="container page-hero">
          <div>
            <p class="eyebrow">Кейс проекта</p>
            <h1>{{ project.title }}</h1>
            <p class="page-lead">
              {{ project.summary }}
            </p>
          </div>
          <BlurImage
            :src="project.image"
            :alt="project.title"
            class="page-hero-image photo-cover"
            sizes="(max-width: 1080px) calc(100vw - 1rem), 520px"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </section>

      <section id="collection" class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Коллекция</p>
            <h2>{{ project.title }}</h2>
            <p v-if="projectCollection">
              {{ projectCollection.total }} фото из выбранного объекта. Реальные
              материалы проекта из нашего портфолио.
            </p>
            <p v-else>
              Коллекция для этого проекта скоро появится после передачи папки с
              фотографиями.
            </p>
          </div>

          <div v-if="projectPhotos.length" class="success-gallery">
            <figure
              v-for="(photo, index) in projectPhotos"
              :key="photo.src"
              class="success-gallery-item"
            >
              <BlurImage
                :src="photo.src"
                :alt="`${project.title}, фото ${index + 1}`"
                :width="photo.width"
                :height="photo.height"
                sizes="(max-width: 760px) calc(100vw - 1rem), (max-width: 960px) calc((100vw - 2rem) / 2), 320px"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <p v-else class="gallery-empty">В этой коллекции пока нет фото.</p>
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

const route = useRoute();
const slug = computed(() => route.params.slug?.toString() || "");

const project = computed(() => {
  const found = projectCases.find((item) => item.slug === slug.value);
  if (!found) {
    throw createError({ statusCode: 404, statusMessage: "Проект не найден" });
  }
  return found;
});

const { data: galleryCollections } = await useFetch<GalleryCollection[]>(
  "/api/success-gallery",
  {
    default: () => [],
  },
);

const projectCollection = computed(() =>
  galleryCollections.value.find(
    (collection) => collection.id === project.value.collectionId,
  ),
);
const projectPhotos = computed(() => projectCollection.value?.photos || []);

useSeoMeta(() => {
  const pageTitle = `${project.value.title} | remdom22.ru`;
  const pageDescription = `Фото выполненного объекта из портфолио remdom22.ru в Барнауле.`;
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
