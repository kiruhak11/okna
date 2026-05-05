<template>
  <header class="topbar">
    <div class="container topbar-inner">
      <NuxtLink to="/" class="brand" @click="closeMenu">
        <span class="brand-mark">{{ siteData.shortBrand }}</span>
        <span class="brand-text">
          <strong>{{ siteData.brandName }}</strong>
          <small>{{ siteData.city }} · ремонт и отделка</small>
        </span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        :aria-label="isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
      >
        <span v-if="isMenuOpen">Закрыть</span>
        <span v-else>Меню</span>
      </button>

      <nav id="primary-navigation" class="menu" :class="{ open: isMenuOpen }">
        <NuxtLink
          v-for="item in siteData.nav"
          :key="item.to"
          :to="item.to"
          :class="{ active: isActive(item.to) }"
          @click="closeMenu"
        >
          {{ item.title }}
        </NuxtLink>
        <NuxtLink to="/#contact" :class="{ active: route.hash === '#contact' }" @click="closeMenu">
          Контакты
        </NuxtLink>
      </nav>

      <div class="topbar-actions">
        <NuxtLink to="/#contact" class="btn btn-primary btn-topbar" @click="closeMenu">
          Заказать звонок
        </NuxtLink>
        <a
          :href="phoneHref"
          class="phone-link"
          aria-label="Позвонить в Проф Ремонт Квартир"
          @click="closeMenu"
        >
          {{ siteData.phoneDisplay }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { siteData } from "@/data";

const route = useRoute();
const isMenuOpen = ref(false);

const phoneHref = computed(() => `tel:${siteData.phone.replace(/[^+\d]/g, "")}`);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const isActive = (to: string) => {
  if (to === "/") {
    return route.path === "/";
  }
  return route.path === to || route.path.startsWith(`${to}/`);
};

const handleResize = () => {
  if (typeof window !== "undefined" && window.innerWidth > 960) {
    closeMenu();
  }
};

if (import.meta.client) {
  watch(
    () => route.fullPath,
    () => {
      closeMenu();
    },
  );

  watch(isMenuOpen, (open) => {
    document.body.style.overflow = open ? "hidden" : "";
  });

  window.addEventListener("resize", handleResize, { passive: true });

  onBeforeUnmount(() => {
    document.body.style.overflow = "";
    window.removeEventListener("resize", handleResize);
  });
}
</script>
