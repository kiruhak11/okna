<template>
  <div class="site-shell">
    <header class="topbar">
      <div class="container topbar-inner">
        <a href="#top" class="brand" @click="closeMenu">
          <span class="brand-mark">{{ siteData.shortBrand }}</span>
          <span class="brand-text">
            <strong>{{ siteData.brandName }}</strong>
            <small>Ремонт комнат, квартир, офисов · {{ siteData.city }}</small>
          </span>
        </a>

        <button
          class="menu-toggle"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
          :aria-expanded="isMenuOpen"
          aria-controls="primary-navigation"
          aria-label="Открыть меню"
        >
          <span v-if="isMenuOpen">Закрыть</span>
          <span v-else>Меню</span>
        </button>

        <nav
          id="primary-navigation"
          class="menu"
          :class="{ open: isMenuOpen }"
        >
          <a href="#services" @click="closeMenu">Услуги</a>
          <a href="#process" @click="closeMenu">Этапы</a>
          <a href="#faq" @click="closeMenu">Вопросы</a>
          <a href="#contact" @click="closeMenu">Контакты</a>
        </nav>

        <a :href="phoneHref" class="phone-link" @click="handleCallClick">
          {{ siteData.phoneDisplay }}
        </a>
      </div>
    </header>

    <main id="top">
      <section class="hero section-offset">
        <div class="container hero-grid">
          <div class="hero-content">
            <p class="hero-label">{{ siteData.response }}</p>
            <h1>{{ siteData.heroTitle }}</h1>
            <p class="hero-text">
              {{ siteData.heroText }}
            </p>

            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary" @click="closeMenu">
                Оставить заявку
              </a>
              <a
                :href="phoneHref"
                class="btn btn-outline"
                @click="handleCallClick"
              >
                Позвонить замерщику
              </a>
            </div>

            <ul class="hero-points">
              <li>{{ siteData.experience }}</li>
              <li>Работаем по договору и смете</li>
              <li>Выполняем полные и частичные работы</li>
            </ul>
          </div>

          <aside class="hero-card" aria-label="Профессиональный подход">
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
            <p class="metric-value">1-2</p>
            <p class="metric-label">дня на выезд замерщика</p>
          </article>
          <article class="metric-card">
            <p class="metric-value">1 м²+</p>
            <p class="metric-label">формат: 1 м², 2 м², 3 м²+</p>
          </article>
          <article class="metric-card">
            <p class="metric-value">100%</p>
            <p class="metric-label">этапы работ фиксируются в смете</p>
          </article>
        </div>
      </section>

      <section id="services" class="section-offset">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow">Услуги</p>
            <h2>Виды работ: комнаты, квартиры, офисы</h2>
            <p>Санузлы, электрика и прочие строительные работы — по договоренности.</p>
          </div>

          <div class="services-grid">
            <article
              v-for="service in siteData.services"
              :key="service.title"
              class="service-card"
              :class="{ highlight: service.highlight }"
            >
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <div class="service-price">{{ service.fromPrice }}</div>
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
            <h2>Коротко о том, что обычно спрашивают до старта</h2>
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
              Перезваниваем, уточняем задачу и согласовываем выезд замерщика.
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
              placeholder="Что нужно сделать"
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
                <span>WhatsApp</span>
                <a :href="siteData.whatsapp" target="_blank" rel="noopener">
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
              <li>
                <span>Сайт</span>
                <a :href="siteData.siteUrl" target="_blank" rel="noopener">
                  {{ siteData.siteUrl }}
                </a>
              </li>
            </ul>

            <div class="contact-note">
              Отдельные и нестандартные строительные работы выполняем по
              договоренности после замера.
            </div>
          </aside>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <p>{{ siteData.brandName }} · {{ siteData.city }}</p>
        <p>Ремонт комнат, квартир и офисов · частичные работы по договору</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { siteData } from "@/data";

const isMenuOpen = ref(false);

const phoneHref = computed(() => `tel:${siteData.phone.replace(/[^+\d]/g, "")}`);

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

const closeMenu = () => {
  isMenuOpen.value = false;
};

const formatStageNumber = (value: number) => value.toString().padStart(2, "0");

const handleCallClick = () => {
  closeMenu();

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
      "Заявка отправлена. Свяжемся с вами и согласуем выезд замерщика.";

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
</script>
