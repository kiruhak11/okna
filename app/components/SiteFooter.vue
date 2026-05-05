<template>
  <footer class="footer" id="contacts">
    <div class="container footer-inner footer-inner-wide">
      <div class="footer-brand">
        <p class="footer-title">{{ siteData.brandName }}</p>
        <p>{{ siteData.city }} · ремонт квартир, домов и офисов</p>
        <p>{{ siteData.address }}</p>
        <p>{{ siteData.workHours }}</p>
      </div>

      <div class="footer-contacts">
        <a :href="`tel:${normalizedPhone}`" class="footer-contact">
          {{ siteData.phoneDisplay }}
        </a>
        <a :href="`mailto:${siteData.email}`" class="footer-contact">
          {{ siteData.email }}
        </a>
        <a :href="siteData.whatsapp" class="footer-contact" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a :href="siteData.telegram" class="footer-contact" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
      </div>

      <nav class="footer-links">
        <NuxtLink v-for="item in siteData.nav" :key="item.to" :to="item.to">
          {{ item.title }}
        </NuxtLink>
        <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
      </nav>

      <div class="footer-copy">
        <p>© {{ currentYear }} {{ siteData.brandName }}. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { siteData } from "@/data";

const currentYear = new Date().getFullYear();
const normalizedPhone = computed(() => siteData.phone.replace(/[^+\d]/g, ""));
</script>
