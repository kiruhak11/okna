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
              <a :href="phoneHref" class="btn btn-outline" @click="handleCallClick">
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
              <NuxtLink to="/stroitelstvo-domov">Строительство</NuxtLink>
            </div>
          </div>

          <aside class="hero-card" aria-label="Ключевые этапы">
            <img
              src="/illustrations/hero-renovation.svg"
              alt="Иллюстрация ремонтного проекта"
              class="hero-illustration"
              loading="eager"
              decoding="async"
            />
            <p class="card-eyebrow">Профессиональный подход</p>
            <ol class="stage-list">
              <li v-for="(stage, index) in siteData.stages" :key="stage.title">
                <span class="stage-number">{{ formatStageNumber(index + 1) }}</span>
                <div>
                  <h2>{{ stage.title }}</h2>
                  <p>{{ stage.description }}</p>
                </div>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section class="metrics section-offset">
        <div class="container metrics-grid">
          <article class="metric-card">
            <p class="metric-value">15+</p>
            <p class="metric-label">лет на рынке</p>
          </article>
          <article class="metric-card">
            <p class="metric-value">500+</p>
            <p class="metric-label">реализованных проектов</p>
          </article>
          <article class="metric-card">
            <p class="metric-value">1000+</p>
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
            </article>
          </div>
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
              <img :src="project.image" :alt="project.title" loading="lazy" decoding="async" />
              <div class="project-meta">
                <h3>{{ project.title }}</h3>
                <p>{{ project.summary }}</p>
                <div class="project-tags">
                  <span>{{ project.area }}</span>
                  <span>{{ project.duration }}</span>
                </div>
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
            <article v-for="item in topReviews" :key="`${item.name}-${item.date}`" class="info-card review-card">
              <h3>{{ item.name }}</h3>
              <p class="review-meta">{{ item.source }} · {{ item.date }}</p>
              <p class="review-text">{{ item.text }}</p>
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
              <div class="process-index">{{ formatStageNumber(index + 1) }}</div>
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
              :class="['form-message', formStatus.success ? 'success' : 'error']"
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
                <span>WhatsApp</span>
                <a :href="siteData.whatsapp" target="_blank" rel="noopener noreferrer">
                  Написать в WhatsApp
                </a>
              </li>
              <li>
                <span>Адрес</span>
                <p>{{ siteData.address }}</p>
              </li>
              <li>
                <span>Режим работы</span>
                <p>{{ siteData.workHours }}</p>
              </li>
            </ul>
            <img
              src="/illustrations/contact.svg"
              alt="Связь с компанией"
              class="contact-illustration"
              loading="lazy"
              decoding="async"
            />
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

const phoneHref = computed(() => `tel:${siteData.phone.replace(/[^+\d]/g, "")}`);
const featuredProjects = computed(() => projectCases.slice(0, 3));
const topReviews = computed(() => reviews.slice(0, 4));

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
    const response = await $fetch<{ success: boolean; message: string }>("/api/contact", {
      method: "POST",
      body: form.value,
    });

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

const pageTitle = "Проф ремонт квартир в Барнауле | remdom22.ru";
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
