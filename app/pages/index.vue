<template>
  <div class="min-h-screen bg-gradient">
    <!-- Снежинки -->
    <div class="snowflakes" aria-hidden="true">
      <div
        v-for="i in 50"
        :key="i"
        class="snowflake"
        :style="getSnowflakeStyle(i)"
      >
        {{ ["❅", "❆", "❄"][i % 3] }}
      </div>
    </div>

    <!-- Новогодние огоньки -->
    <div class="christmas-lights">
      <div
        v-for="i in 20"
        :key="i"
        class="light"
        :style="getLightStyle(i)"
      ></div>
    </div>

    <!-- Шапка -->
    <header class="header">
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <div class="logo">
          <div class="logo-icon">
            <Logo size="32" />
          </div>
          <span class="logo-text">Окна · Барнаул</span>
        </div>
        <button
          class="menu-toggle"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Открыть меню"
        >
          <span v-if="!isMenuOpen">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <span v-else>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>

        <ul class="nav-links">
          <li><a href="#services" @click="isMenuOpen = false">Услуги</a></li>
          <li><a href="#about" @click="isMenuOpen = false">О нас</a></li>
          <li><a href="#contact" @click="isMenuOpen = false">Контакты</a></li>
        </ul>
        <div class="call-dropdown">
          <button
            class="call-button"
            type="button"
            @click="toggleHeaderDropdown"
          >
            Позвонить
            <svg
              class="dropdown-icon"
              :class="{ open: isCallDropdownOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <transition name="dropdown-fade">
            <div v-if="isCallDropdownOpen" class="call-dropdown-menu">
              <a
                :href="phoneHref"
                class="call-dropdown-item"
                @click="handleCallClick"
              >
                <svg
                  class="phone-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {{ siteData.phoneDisplay }}
              </a>
              <a
                :href="phone2Href"
                class="call-dropdown-item"
                @click="handleCallClick"
              >
                <svg
                  class="phone-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {{ siteData.phone2Display }}
              </a>
            </div>
          </transition>
        </div>
      </nav>
    </header>

    <!-- Героическая секция -->
    <section class="hero">
      <div class="hero-badge">
        {{ siteData.city }} · {{ siteData.masterName }}
      </div>
      <h1>Профессиональный ремонт и обслуживание окон в Барнауле</h1>
      <p>
        Выезд мастера в день обращения. Решаем любые задачи с пластиковыми и
        деревянными окнами. Работаю лично, без посредников. Гарантия качества и
        прозрачная смета на все виды работ.
      </p>
      <div class="hero-actions">
        <a
          href="#contact"
          class="cta-button cta-primary"
        >
          <svg
            class="cta-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span class="cta-text">Оставить заявку</span>
        </a>
        <div class="hero-call-dropdown">
          <button
            class="cta-button cta-secondary"
            type="button"
            @click="toggleHeroDropdown"
          >
            <svg
              class="cta-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span class="cta-text">Позвонить</span>
            <svg
              class="dropdown-icon"
              :class="{ open: isHeroCallDropdownOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <transition name="dropdown-fade">
            <div v-if="isHeroCallDropdownOpen" class="hero-call-dropdown-menu">
              <a
                :href="phoneHref"
                class="hero-call-dropdown-item"
                @click="handleCallClick"
              >
                <svg
                  class="phone-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {{ siteData.phoneDisplay }}
              </a>
              <a
                :href="phone2Href"
                class="hero-call-dropdown-item"
                @click="handleCallClick"
              >
                <svg
                  class="phone-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {{ siteData.phone2Display }}
              </a>
            </div>
          </transition>
        </div>
      </div>
      <div class="hero-tags">
        <span>{{ siteData.response }}</span>
        <span>Более 10 лет опыта</span>
        <span>Прозрачное ценообразование</span>
      </div>
    </section>

    <!-- Преимущества -->
    <section class="features">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon" style="background: #dbeafe; color: #2563eb">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 2rem; height: 2rem"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3>Гарантия качества</h3>
          <p>
            Все работы выполняются с гарантией качества и использованием
            профессионального инструмента
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background: #d1fae5; color: #10b981">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 2rem; height: 2rem"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3>Быстро и в срок</h3>
          <p>
            Выезд в день обращения. Работаем быстро, качественно и всегда
            укладываемся в срок
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon" style="background: #f3e8ff; color: #9333ea">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 2rem; height: 2rem"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3>Доступные цены</h3>
          <p>
            Честные и прозрачные цены без скрытых доплат. Оплата только за
            выполненную работу
          </p>
        </div>
      </div>
    </section>

    <!-- Услуги -->
    <section id="services" class="services">
      <h2>Что могу для вас сделать</h2>
      <div class="services-grid">
        <div
          v-for="(service, index) in siteData.services"
          :key="service.title"
          class="service-card"
        >
          <div class="service-image" :class="getServiceGradient(index)">
            <img
              v-if="service.icon"
              :src="service.icon"
              :alt="service.title"
              class="service-icon-image"
              loading="lazy"
            />
            <svg
              v-else
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              class="service-fallback-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="price" :style="{ color: getServiceColor(index) }">
              {{ service.fromPrice }}
            </div>
          </div>
        </div>
      </div>

      <!-- Блок с подробным прайсом -->
      <div class="price-list">
        <h3>Стоимость моих работ</h3>
        <ul>
          <li
            v-for="service in siteData.services"
            :key="service.title"
            :class="['price-item', { highlight: service.highlight }]"
            @click="selectService(service.title)"
          >
            <span class="price-title">{{ service.title }}</span>
            <span class="price-value">{{ service.fromPrice }}</span>
          </li>
        </ul>
        <p class="price-list-hint">
          Нажмите на услугу, чтобы быстро оставить заявку
        </p>
      </div>
    </section>

    <!-- О нас -->
    <section id="about" class="about">
      <div class="about-content">
        <h2>Почему выбирают частного мастера</h2>
        <div class="about-text">
          <h3>Опыт и профессионализм</h3>
          <p>
            Более 10 лет решаю задачи по пластиковым, деревянным и алюминиевым
            окнам. Приезжаю лично, работаю аккуратно и оставляю порядок после
            себя.
          </p>
          <p>
            Использую качественные материалы и современный инструмент. Объясняю,
            что было сделано, и даю понятную гарантию.
          </p>
          <ul>
            <li>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                style="width: 1.25rem; height: 1.25rem"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Гарантия на все виды работ
            </li>
            <li>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                style="width: 1.25rem; height: 1.25rem"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Выезд в день обращения
            </li>
            <li>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                style="width: 1.25rem; height: 1.25rem"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Честные и прозрачные цены
            </li>
            <li>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                style="width: 1.25rem; height: 1.25rem"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Опыт работы более 10 лет
            </li>
          </ul>
        </div>
        <div class="stats-card" ref="statsCard">
          <div class="stats-grid">
            <div class="stat">
              <div class="stat-number" data-target="10">0</div>
              <div class="stat-label">Лет опыта</div>
            </div>
            <div class="stat">
              <div class="stat-number" data-target="5000">0</div>
              <div class="stat-label">Довольных клиентов</div>
            </div>
            <div class="stat">
              <div class="stat-number" data-target="24">0</div>
              <div class="stat-label">Часа в сутках</div>
            </div>
            <div class="stat">
              <div class="stat-number" data-target="100">0</div>
              <div class="stat-label">Гарантия качества</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Форма обратной связи -->
    <section id="contact" class="contact">
      <h2>Свяжитесь с нами</h2>
      <div class="contact-wrapper">
        <form @submit.prevent="submitForm" class="contact-form">
          <div
            v-if="formStatus.message"
            :class="['form-message', formStatus.success ? 'success' : 'error']"
          >
            {{ formStatus.message }}
          </div>

          <div class="form-group">
            <label for="name">Ваше имя *</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Иван Иванов"
            />
          </div>

          <div class="form-group">
            <label for="phone">Номер телефона *</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              required
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div class="form-group">
            <label for="service">Вид услуги</label>
            <select id="service" v-model="form.service">
              <option value="">Выберите услугу</option>
              <option
                v-for="service in siteData.services"
                :key="service.title"
                :value="service.title"
              >
                {{ service.title }}
              </option>
              <option value="Другое">Другое</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Сообщение *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Опишите вашу проблему или задайте вопрос..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="formStatus.loading"
            class="submit-button"
          >
            <span v-if="formStatus.loading">Отправка...</span>
            <span v-else>Отправить заявку</span>
          </button>
        </form>

        <!-- Контакты -->
        <div class="contact-info">
          <div class="info-card">
            <h3>Контактная информация</h3>
            <div class="info-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div class="info-content">
                <div class="info-label">Телефоны</div>
                <div
                  class="info-value"
                  style="display: flex; flex-direction: column; gap: 0.5rem"
                >
                  <a :href="phoneHref" @click="handleCallClick">{{ siteData.phoneDisplay }}</a>
                  <a :href="phone2Href" @click="handleCallClick">{{ siteData.phone2Display }}</a>
                </div>
              </div>
            </div>
            <div class="info-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div class="info-content">
                <div class="info-label">Адрес</div>
                <div class="info-value">{{ siteData.address }}</div>
              </div>
            </div>
            <div class="info-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div class="info-content">
                <div class="info-label">Режим работы</div>
                <div class="info-value">{{ siteData.workHours }}</div>
              </div>
            </div>
          </div>

          <div class="quick-contact">
            <div class="quick-header">
              <div class="quick-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10 8m0 0h5a2 2 0 012 2v1m-7-3l2.553 7.66A2 2 0 0014.447 18H17"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 20a1 1 0 11-2 0 1 1 0 012 0zM9 20a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
              <div>
                <h3>Быстрая связь</h3>
                <p class="quick-subtitle">
                  Напишите или позвоните — отвечу в течение 5–10 минут.
                </p>
              </div>
            </div>

            <ul class="quick-list">
              <li>
                Консультация и ориентировочная стоимость по телефону или
                WhatsApp
              </li>
              <li>Можете отправить фото окна — сразу скажу варианты ремонта</li>
              <li>Выезд мастера Дмитрия в удобное для вас время</li>
            </ul>

            <div class="quick-actions">
              <div class="quick-call-dropdown">
                <button
                  class="quick-button"
                  type="button"
                  @click="toggleQuickDropdown"
                >
                  <span class="quick-btn-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span class="quick-btn-text">
                    <span class="quick-btn-main">Позвонить Дмитрию</span>
                    <span class="quick-btn-sub">Выберите удобный номер</span>
                  </span>
                  <svg
                    class="quick-dropdown-icon"
                    :class="{ open: isQuickCallDropdownOpen }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <transition name="dropdown-fade">
                  <div
                    v-if="isQuickCallDropdownOpen"
                    class="quick-call-dropdown-menu"
                  >
                    <a
                      :href="phoneHref"
                      class="quick-call-dropdown-item"
                      @click="handleCallClick"
                    >
                      <svg
                        class="phone-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {{ siteData.phoneDisplay }}
                    </a>
                    <a
                      :href="phone2Href"
                      class="quick-call-dropdown-item"
                      @click="handleCallClick"
                    >
                      <svg
                        class="phone-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {{ siteData.phone2Display }}
                    </a>
                  </div>
                </transition>
              </div>
              <a
                :href="siteData.whatsapp"
                target="_blank"
                rel="noopener"
                class="quick-button ghost"
              >
                <span class="quick-btn-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3h14a2 2 0 012 2v11.586a1 1 0 01-1.707.707L16 15H5a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                  </svg>
                </span>
                <span class="quick-btn-text">
                  <span class="quick-btn-main">Написать в WhatsApp</span>
                  <span class="quick-btn-sub">Удобно отправить фото окон</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Футер -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo-icon">
              <Logo size="32" />
            </div>
            <span class="logo-text">Окна · Барнаул</span>
          </div>
          <p>
            Выездной мастер по окнам и балконам. Честно, быстро, с гарантией.
          </p>
        </div>
        <div class="footer-section">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a :href="phoneHref" @click="handleCallClick">{{ siteData.phoneDisplay }}</a>
            </li>
            <li>
              <a :href="phone2Href" @click="handleCallClick">{{ siteData.phone2Display }}</a>
            </li>
            <li>{{ siteData.address }}</li>
            <li>{{ siteData.workHours }}</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Услуги</h4>
          <ul>
            <li
              v-for="service in siteData.services.slice(0, 6)"
              :key="service.title"
            >
              {{ service.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Оконный Мастер. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { siteData } from "@/data";

const phoneHref = `tel:${siteData.phone.replace(/[^+\d]/g, "")}`;
const phone2Href = `tel:${siteData.phone2.replace(/[^+\d]/g, "")}`;
const isMenuOpen = ref(false);
const isCallDropdownOpen = ref(false);
const isHeroCallDropdownOpen = ref(false);
const isQuickCallDropdownOpen = ref(false);
const statsCard = ref<HTMLElement | null>(null);

// Генерация случайных стилей для снежинок
const getSnowflakeStyle = (i: number) => {
  const randomLeft = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 10 + Math.random() * 20;
  const randomSize = 0.5 + Math.random() * 1;

  return {
    left: `${randomLeft}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`,
    fontSize: `${randomSize}rem`,
    opacity: 0.3 + Math.random() * 0.7,
  };
};

// Генерация случайных стилей для огоньков
const getLightStyle = (i: number) => {
  const randomLeft = (i * 5) % 100;
  const randomDelay = Math.random() * 2;
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#ffd700",
  ];
  const randomColor = colors[i % colors.length];

  return {
    left: `${randomLeft}%`,
    animationDelay: `${randomDelay}s`,
    backgroundColor: randomColor,
    boxShadow: `0 0 20px ${randomColor}`,
  };
};

// Функция анимации подсчета чисел
const animateNumber = (
  element: HTMLElement,
  target: number,
  suffix: string = ""
) => {
  const duration = 2000; // 2 секунды
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    if (suffix === "+") {
      element.textContent = Math.floor(current) + suffix;
    } else if (suffix === "%") {
      element.textContent = Math.floor(current) + suffix;
    } else if (suffix === "/7") {
      element.textContent = Math.floor(current) + suffix;
    } else {
      element.textContent = Math.floor(current).toString();
    }
  }, duration / steps);
};

// Функции управления dropdown
const closeAllDropdowns = () => {
  isCallDropdownOpen.value = false;
  isHeroCallDropdownOpen.value = false;
  isQuickCallDropdownOpen.value = false;
};

const toggleHeaderDropdown = () => {
  isCallDropdownOpen.value = !isCallDropdownOpen.value;
  isHeroCallDropdownOpen.value = false;
  isQuickCallDropdownOpen.value = false;
};

const toggleHeroDropdown = () => {
  isHeroCallDropdownOpen.value = !isHeroCallDropdownOpen.value;
  isCallDropdownOpen.value = false;
  isQuickCallDropdownOpen.value = false;
};

const toggleQuickDropdown = () => {
  isQuickCallDropdownOpen.value = !isQuickCallDropdownOpen.value;
  isCallDropdownOpen.value = false;
  isHeroCallDropdownOpen.value = false;
};

// Яндекс.Метрика: отслеживание цели "Оставить заявку"
let lastInviteGoalAt = 0;
const trackInviteGoal = () => {
  const now = Date.now();
  if (now - lastInviteGoalAt < 2000) return;
  lastInviteGoalAt = now;
  if (typeof window !== "undefined" && (window as any).ym) {
    (window as any).ym(106110599, "reachGoal", "invite");
    console.log('📊 Яндекс.Метрика: цель "invite" достигнута');
  }
};

// Яндекс.Метрика: отслеживание цели "Позвонить"
const handleCallClick = () => {
  if (typeof window !== "undefined" && (window as any).ym) {
    (window as any).ym(106110599, "reachGoal", "call");
    console.log('📊 Яндекс.Метрика: цель "call" достигнута');
  }
  closeAllDropdowns();
};

// Закрытие dropdown при клике вне его
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      !target.closest(".call-dropdown") &&
      !target.closest(".hero-call-dropdown") &&
      !target.closest(".quick-call-dropdown")
    ) {
      closeAllDropdowns();
    }
  };

  document.addEventListener("click", handleClickOutside);

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeAllDropdowns();
    }
  };

  document.addEventListener("keydown", handleEscape);

  // Intersection Observer для анимации при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  let statsAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");

        // Анимация статистики
        if (entry.target.classList.contains("stats-card") && !statsAnimated) {
          statsAnimated = true;
          const statNumbers = entry.target.querySelectorAll(".stat-number");
          statNumbers.forEach((statNumber) => {
            const target = parseInt(
              (statNumber as HTMLElement).getAttribute("data-target") || "0"
            );
            const element = statNumber as HTMLElement;

            // Определяем суффикс в зависимости от значения
            let suffix = "";
            if (target === 10) {
              suffix = "+";
            } else if (target === 5000) {
              suffix = "+";
            } else if (target === 24) {
              suffix = "/7";
            } else if (target === 100) {
              suffix = "%";
            }

            animateNumber(element, target, suffix);
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Наблюдаем за всеми секциями и карточками
  const elements = document.querySelectorAll(
    ".feature-card, .service-card, .about, .contact, .price-list, .stats-card"
  );
  elements.forEach((el) => observer.observe(el));

  // Параллакс эффект для героической секции
  let ticking = false;
  const parallaxElements =
    document.querySelectorAll<HTMLElement>(".hero, .hero-badge");

  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach((el, index) => {
      const speed = 0.5 + index * 0.1;
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking && window.innerWidth > 768) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });

  // Пользовательский курсор отключен по запросу пользователя
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

// Функция выбора услуги из прайс-листа
const selectService = (serviceTitle: string) => {
  // Устанавливаем выбранную услугу в форму
  form.value.service = serviceTitle;

  // Плавно скроллим к форме
  const contactForm = document.querySelector("#contact");
  if (contactForm) {
    contactForm.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Через небольшую задержку фокусируемся на поле имени
    setTimeout(() => {
      const nameInput = document.querySelector("#name") as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
        // Добавляем визуальную подсветку выбранной услуги
        const serviceSelect = document.querySelector(
          "#service"
        ) as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.style.animation = "pulse 0.5s ease-in-out";
          setTimeout(() => {
            serviceSelect.style.animation = "";
          }, 500);
        }
      }
    }, 800);
  }
};

const submitForm = async () => {
  if (formStatus.value.loading) return;
  formStatus.value.loading = true;
  formStatus.value.message = "";

  try {
    const response = await $fetch<{ success: boolean; message: string }>(
      "/api/contact",
      {
        method: "POST",
        body: form.value,
      }
    );

    if (response.success) {
      formStatus.value.success = true;
      formStatus.value.message =
        "Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.";

      // Отслеживаем цель в Яндекс.Метрике
      trackInviteGoal();

      // Очистка формы
      form.value = {
        name: "",
        phone: "",
        service: "",
        message: "",
      };
    } else {
      throw new Error(response.message || "Ошибка при отправке");
    }
  } catch (error: any) {
    formStatus.value.success = false;
    formStatus.value.message =
      error.data?.message ||
      "Произошла ошибка при отправке заявки. Попробуйте позже или позвоните нам.";
  } finally {
    formStatus.value.loading = false;
  }
};

const gradients = [
  "gradient-blue",
  "gradient-green",
  "gradient-purple",
  "gradient-orange",
  "gradient-red",
  "gradient-teal",
];

const priceColors = [
  "#2563eb",
  "#10b981",
  "#9333ea",
  "#ea580c",
  "#ef4444",
  "#0d9488",
];

const getServiceGradient = (index: number) => {
  return gradients[index % gradients.length];
};

const getServiceColor = (index: number) => {
  return priceColors[index % priceColors.length];
};
</script>
