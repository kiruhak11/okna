<template>
  <div class="site-shell">
    <SiteHeader />

    <main id="top">
      <section class="hero section-offset">
        <div class="container hero-grid">
          <div class="hero-content">
            <p class="hero-label">{{ siteData.response }}</p>
            <h1>{{ siteData.heroTitle }}</h1>
            <p class="hero-text">{{ siteData.heroText }}</p>

            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">Оставить заявку</a>
              <a
                :href="phoneHref"
                class="btn btn-outline"
                @click="handleCallClick"
              >
                Позвонить специалисту
              </a>
            </div>

            <ul class="hero-points">
              <li>{{ siteData.experience }}</li>
              <li>Фиксируем этапы в договоре</li>
              <li>Ежедневный контроль качества</li>
            </ul>

            <div class="page-links">
              <NuxtLink to="/o-kompanii">О компании</NuxtLink>
              <NuxtLink to="/dizain-i-remont">Наши проекты</NuxtLink>
              <NuxtLink to="/uslugi-po-remontu-i-dizainu">Все услуги</NuxtLink>
            </div>
          </div>

          <aside class="hero-card" aria-label="Преимущества">
            <p class="card-eyebrow">Преимущества</p>
            <ol class="stage-list">
              <li v-for="advantage in heroAdvantages" :key="advantage.title">
                <span class="stage-number stage-icon" aria-hidden="true">
                  {{ advantage.icon }}
                </span>
                <div>
                  <h2>{{ advantage.title }}</h2>
                  <p>{{ advantage.description }}</p>
                </div>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section class="metrics section-offset">
        <div class="container metrics-grid">
          <article class="metric-card">
            <p class="metric-value">+15 лет</p>
            <p class="metric-label">
              опыт руководителя и мастеров в сфере ремонта
            </p>
          </article>
          <article class="metric-card">
            <p class="metric-value">100+</p>
            <p class="metric-label">реализованных проектов</p>
          </article>
          <article class="metric-card">
            <p class="metric-value">250+</p>
            <p class="metric-label">клиентов по Барнаулу и краю</p>
          </article>
          <article class="metric-card">
            <p class="metric-value">2 года</p>
            <p class="metric-label">гарантии на выполненные работы</p>
          </article>
        </div>
      </section>

      <section id="services" class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Услуги</p>
            <h2>От идеи до готового пространства</h2>
            <p>
              Делаем ремонт, дизайн и отдельные строительные задачи под ваш
              бюджет и сроки.
            </p>
          </div>

          <div class="services-grid">
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
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <div class="service-price">{{ service.fromPrice }}</div>
              <p class="service-price-note">{{ service.priceNote }}</p>
            </article>
          </div>
          <p class="price-disclaimer">
            Точную стоимость рассчитываем после замера и согласовываем в
            договоре.
          </p>
        </div>
      </section>

      <section class="section-offset service-focus-section">
        <div class="container service-focus-grid">
          <article
            v-for="item in serviceHighlights"
            :id="item.id"
            :key="item.id"
            class="service-focus-card"
          >
            <p class="eyebrow">{{ item.eyebrow }}</p>
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <ul>
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
            <div class="service-focus-price">
              <span>{{ item.price }}</span>
              <small>{{ item.priceNote }}</small>
            </div>
            <a href="#contact" class="btn btn-primary">Обсудить задачу</a>
          </article>
        </div>
      </section>

      <section class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Проекты</p>
            <h2>Свежие кейсы по дизайну и ремонту</h2>
          </div>

          <div class="project-grid">
            <NuxtLink
              v-for="project in featuredProjects"
              :key="project.slug"
              :to="`/dizain-i-remont/${project.slug}`"
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
                <h3>{{ project.title }}</h3>
                <p>Фото выполненного объекта из портфолио.</p>
              </div>
            </NuxtLink>
          </div>

          <div class="section-cta">
            <NuxtLink to="/dizain-i-remont" class="btn btn-outline">
              Смотреть все проекты
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="section-offset" id="reviews">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Отзывы</p>
            <h2>Что говорят о нас клиенты</h2>
          </div>

          <div class="card-grid reviews-grid">
            <article
              v-for="item in topReviews"
              :key="`${item.name}-${item.date}`"
              class="info-card review-card"
            >
              <BlurImage
                v-if="item.photo"
                :src="item.photo"
                :alt="`${item.workType}: фото после ремонта`"
                class="review-photo"
                sizes="(max-width: 620px) calc(100vw - 3rem), (max-width: 1080px) calc((100vw - 4rem) / 2), 360px"
                loading="lazy"
                decoding="async"
              />
              <div class="review-body">
                <div class="review-head">
                  <h3>{{ item.name }}</h3>
                  <p class="review-meta">{{ item.date }}</p>
                </div>
                <dl class="review-facts">
                  <div>
                    <dt>Адрес</dt>
                    <dd>{{ item.address }}</dd>
                  </div>
                  <div>
                    <dt>Работы</dt>
                    <dd>{{ item.workType }}</dd>
                  </div>
                </dl>
                <p class="review-text">{{ item.text }}</p>
                <div class="company-response">
                  <span>Ответ компании</span>
                  <p>{{ item.response }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="process" class="section-offset process-section">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Этапы работы</p>
            <h2>Понятная последовательность без лишней суеты</h2>
          </div>

          <div class="process-grid">
            <article
              v-for="(stage, index) in siteData.stages"
              :key="stage.title"
              class="process-card"
            >
              <div class="process-index">
                {{ formatStageNumber(index + 1) }}
              </div>
              <h3>{{ stage.title }}</h3>
              <p>{{ stage.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Частые вопросы</p>
            <h2>Коротко о том, что спрашивают перед стартом</h2>
          </div>

          <div class="faq-list">
            <details v-for="item in siteData.faq" :key="item.question">
              <summary>{{ item.question }}</summary>
              <p>{{ item.answer }}</p>
            </details>
          </div>
        </div>
      </section>

      <section id="contact" class="section-offset contact-section">
        <div class="container contact-grid">
          <form class="contact-form" @submit.prevent="submitForm">
            <h2>Оставьте заявку</h2>
            <p class="form-subtitle">
              Уточним задачу, предложим решение и согласуем удобное время
              выезда.
            </p>

            <div
              v-if="formStatus.message"
              :class="[
                'form-message',
                formStatus.success ? 'success' : 'error',
              ]"
              aria-live="polite"
            >
              {{ formStatus.message }}
            </div>

            <label for="name">Имя *</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              autocomplete="name"
              maxlength="80"
              placeholder="Ваше имя"
            />

            <label for="phone">Телефон *</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              required
              autocomplete="tel"
              inputmode="tel"
              maxlength="30"
              placeholder="+7 (___) ___-__-__"
            />

            <label for="service">Тип работ</label>
            <select id="service" v-model="form.service">
              <option value="">Выберите вариант</option>
              <option
                v-for="service in siteData.services"
                :key="service.title"
                :value="service.title"
              >
                {{ service.title }}
              </option>
            </select>

            <label for="message">Комментарий *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              maxlength="1000"
              placeholder="Коротко опишите задачу"
            ></textarea>

            <button type="submit" :disabled="formStatus.loading">
              <span v-if="formStatus.loading">Отправка...</span>
              <span v-else>Отправить заявку</span>
            </button>
          </form>

          <aside class="contact-card">
            <h3>Контакты</h3>
            <ul>
              <li>
                <span>Телефон</span>
                <a :href="phoneHref" @click="handleCallClick">
                  {{ siteData.phoneDisplay }}
                </a>
              </li>
              <li>
                <span>Email</span>
                <a :href="`mailto:${siteData.email}`">{{ siteData.email }}</a>
              </li>
              <li>
                <span>Адрес</span>
                <p>{{ siteData.address }}</p>
              </li>
              <li>
                <span>Режим работы</span>
                <p>{{ siteData.workHours }}</p>
              </li>
              <li>
                <span>Документы</span>
                <NuxtLink to="/rekvizity"
                  >Реквизиты ООО СК «ПРЕМИУМ-СТРОЙ»</NuxtLink
                >
              </li>
            </ul>
            <div class="contact-map-wrap">
              <iframe
                class="contact-map"
                :src="mapSrc"
                title="Мы на картах: г. Барнаул, ул. Победная, 112, офис Н-2/3"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              class="contact-map-open"
              :href="mapExternalLink"
              target="_blank"
              rel="noopener"
            >
              Открыть в Яндекс Картах
            </a>
          </aside>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { projectCases, reviews, siteData } from "@/data";

const phoneHref = computed(
  () => `tel:${siteData.phone.replace(/[^+\d]/g, "")}`,
);
const featuredProjects = computed(() => projectCases.slice(0, 3));
const topReviews = computed(() => reviews.slice(0, 5));
const heroAdvantages = [
  {
    icon: "-",
    title: "2 года гарантии",
    description: "На все виды работ",
  },
  {
    icon: "-",
    title: "Работаем без грязи",
    description: "Защищаем соседние комнаты пленкой",
  },
  {
    icon: "-",
    title: "Бесплатный замер",
    description: "Выезд за 1–2 дня",
  },
  {
    icon: "-",
    title: "Фиксируем цену",
    description: "Без скрытых доплат в договоре",
  },
  {
    icon: "-",
    title: "Свой прораб",
    description: "Контроль качества каждый день",
  },
  {
    icon: "-",
    title: "Поэтапная оплата",
    description: "Платите только за выполненные работы",
  },
];
const mapSrc = computed(() => {
  const { lat, lon } = siteData.mapCoordinates;
  const point = `${lon},${lat}`;
  const params = new URLSearchParams({
    ll: point,
    mode: "whatshere",
    z: "17",
  });

  params.set("whatshere[point]", point);
  params.set("whatshere[zoom]", "17");

  return `https://yandex.ru/map-widget/v1/?${params.toString()}`;
});
const mapExternalLink = computed(() => {
  const { lat, lon } = siteData.mapCoordinates;
  const point = `${lon},${lat}`;
  const params = new URLSearchParams({
    ll: point,
    mode: "whatshere",
    z: "17",
  });

  params.set("whatshere[point]", point);
  params.set("whatshere[zoom]", "17");

  return `https://yandex.ru/maps/197/barnaul/?${params.toString()}`;
});
const serviceHighlights = computed(() => {
  const roomService = siteData.services.find(
    (service) => service.title === "Ремонт одной комнаты",
  );
  const officeService = siteData.services.find(
    (service) => service.title === "Ремонт квартир и офисов",
  );

  return [
    {
      id: "room-renovation",
      eyebrow: "Ремонт комнат",
      title: "Обновим одну комнату без ремонта всей квартиры",
      description:
        "Подходит, если нужно привести в порядок спальню, детскую, гостиную или кабинет и не растягивать работы на всю квартиру.",
      points: [
        "Фиксируем границы работ до старта",
        "Защищаем проходные зоны и мебель",
        "Согласовываем фиксированную стоимость комнаты",
      ],
      price: roomService?.fromPrice || "После замера",
      priceNote: roomService?.priceNote || "Фиксированная цена за комнату",
    },
    {
      id: "office-renovation",
      eyebrow: "Ремонт офисов",
      title: "Ремонтируем офисы и коммерческие помещения",
      description:
        "Планируем график так, чтобы ремонт меньше мешал работе команды, заранее считаем материалы и закрываем вопросы по электрике и отделке.",
      points: [
        "Работаем по этапам и согласованному графику",
        "Учитываем нагрузку на электрику и освещение",
        "Подбираем износостойкие материалы под бюджет",
      ],
      price: officeService?.fromPrice || "от 4 000 ₽/м²",
      priceNote: officeService?.priceNote || "Цена указана за квадратный метр",
    },
  ];
});

const form = ref({
  name: "",
  phone: "",
  service: "",
  message: "",
});

const formStatus = ref({
  loading: false,
  success: false,
  message: "",
});

const formatStageNumber = (value: number) => value.toString().padStart(2, "0");

const handleCallClick = () => {
  if (typeof window !== "undefined" && (window as any).ym) {
    (window as any).ym(106110599, "reachGoal", "call");
  }
};

const submitForm = async () => {
  if (formStatus.value.loading) return;

  formStatus.value.loading = true;
  formStatus.value.success = false;
  formStatus.value.message = "";

  try {
    const response = await $fetch<{ success: boolean; message: string }>(
      "/api/contact",
      {
        method: "POST",
        body: form.value,
      },
    );

    if (!response.success) {
      throw new Error(response.message || "Ошибка при отправке");
    }

    formStatus.value.success = true;
    formStatus.value.message =
      "Заявка отправлена. Свяжемся с вами и согласуем удобное время.";

    if (typeof window !== "undefined" && (window as any).ym) {
      (window as any).ym(106110599, "reachGoal", "invite");
    }

    form.value = {
      name: "",
      phone: "",
      service: "",
      message: "",
    };
  } catch (error: any) {
    formStatus.value.success = false;
    formStatus.value.message =
      error?.data?.message ||
      "Не удалось отправить заявку. Попробуйте позже или позвоните по телефону.";
  } finally {
    formStatus.value.loading = false;
  }
};

const pageTitle = "Ремонт квартир в Барнауле | remdom22.ru";
const pageDescription =
  "Ремонт квартир и офисов, дизайн интерьеров и строительные работы под ключ в Барнауле. Прозрачная смета, договор и контроль качества на каждом этапе.";

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: "website",
  ogUrl: siteData.siteUrl,
});

useHead({
  link: [{ rel: "canonical", href: siteData.siteUrl }],
});
</script>
