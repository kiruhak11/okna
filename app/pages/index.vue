<template>
  <div class="min-h-screen bg-gradient">
    <!-- Шапка -->
    <header class="header">
      <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
        <div class="logo">
          <div class="logo-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 1.5rem; height: 1.5rem"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
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
        <a :href="phoneHref" class="call-button"> Позвонить мастеру </a>
      </nav>
    </header>

    <!-- Героическая секция -->
    <section class="hero">
      <div class="hero-badge">
        {{ siteData.city }} · {{ siteData.masterName }}
      </div>
      <h1>Современный сервис по окнам с эффектом «вау»</h1>
      <p>
        Выезд в день обращения, решение любой проблемы с окнами и балконами.
        Работаю лично, без посредников, с гарантией и честной сметой.
      </p>
      <div class="hero-actions">
        <a href="#contact" class="cta-button"> Оставить заявку </a>
        <a :href="phoneHref" class="cta-secondary">
          Позвонить: {{ siteData.phoneDisplay }}
        </a>
      </div>
      <div class="hero-tags">
        <span>{{ siteData.response }}</span>
        <span>10+ лет опыта</span>
        <span>Без скрытых доплат</span>
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
        <div class="service-card">
          <div class="service-image gradient-blue">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 5rem; height: 5rem; color: white"
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
            <h3>Регулировка окон</h3>
            <p>
              Настройка фурнитуры, устранение продуваний, правильная работа
              створок
            </p>
            <div class="price" style="color: #2563eb">От 500 ₽</div>
          </div>
        </div>

        <div class="service-card">
          <div class="service-image gradient-green">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 5rem; height: 5rem; color: white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <div class="service-content">
            <h3>Замена уплотнителей</h3>
            <p>
              Установка новых уплотнителей для герметичности и защиты от шума
            </p>
            <div class="price" style="color: #10b981">От 800 ₽</div>
          </div>
        </div>

        <div class="service-card">
          <div class="service-image gradient-purple">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 5rem; height: 5rem; color: white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <div class="service-content">
            <h3>Ремонт фурнитуры</h3>
            <p>Замена и ремонт ручек, петель, механизмов открывания</p>
            <div class="price" style="color: #9333ea">От 600 ₽</div>
          </div>
        </div>

        <div class="service-card">
          <div class="service-image gradient-orange">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 5rem; height: 5rem; color: white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
          </div>
          <div class="service-content">
            <h3>Установка москитных сеток</h3>
            <p>Изготовление и установка москитных сеток на окна</p>
            <div class="price" style="color: #ea580c">От 1200 ₽</div>
          </div>
        </div>

        <div class="service-card">
          <div class="service-image gradient-red">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 5rem; height: 5rem; color: white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <div class="service-content">
            <h3>Замена стекол</h3>
            <p>Замена разбитых или поврежденных стекол в окнах</p>
            <div class="price" style="color: #ef4444">От 1500 ₽</div>
          </div>
        </div>

        <div class="service-card">
          <div class="service-image gradient-teal">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="width: 5rem; height: 5rem; color: white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div class="service-content">
            <h3>Утепление окон</h3>
            <p>Комплексное утепление окон для максимальной теплоизоляции</p>
            <div class="price" style="color: #0d9488">От 1000 ₽</div>
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
          >
            <span class="price-title">{{ service.title }}</span>
            <span class="price-value">{{ service.fromPrice }}</span>
          </li>
        </ul>
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
        <div class="stats-card">
          <div class="stats-grid">
            <div class="stat">
              <div class="stat-number">10+</div>
              <div class="stat-label">Лет опыта</div>
            </div>
            <div class="stat">
              <div class="stat-number">5000+</div>
              <div class="stat-label">Довольных клиентов</div>
            </div>
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Поддержка</div>
            </div>
            <div class="stat">
              <div class="stat-number">100%</div>
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
                <div class="info-label">Телефон</div>
                <div class="info-value">
                  <a :href="phoneHref">{{ siteData.phoneDisplay }}</a>
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
              <a :href="phoneHref" class="quick-button">
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
                  <span class="quick-btn-sub"
                    >Быстрее всего связаться по телефону</span
                  >
                </span>
              </a>
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
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="width: 1.5rem; height: 1.5rem"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
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
              <a :href="phoneHref">{{ siteData.phoneDisplay }}</a>
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
import { ref } from "vue";
import { siteData } from "@/data";

const phoneHref = `tel:${siteData.phone.replace(/[^+\d]/g, "")}`;
const isMenuOpen = ref(false);

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

const submitForm = async () => {
  formStatus.value.loading = true;
  formStatus.value.message = "";

  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: form.value,
    });

    if (response.success) {
      formStatus.value.success = true;
      formStatus.value.message =
        "Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.";
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
</script>
