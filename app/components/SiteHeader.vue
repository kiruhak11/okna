<template>
  <header class="topbar">
    <div class="container topbar-inner">
      <NuxtLink to="/" class="brand" @click="closeMenu">
        <span class="brand-mark">
          <img
            src="/logo.png"
            alt="Логотип Ремонт Квартир"
            class="brand-logo"
          />
        </span>
        <span class="brand-text">
          <strong>{{ siteData.brandName }}</strong>
          <small>Ремонт квартир, комнат</small>
          <small>и офисов в Барнауле</small>
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
        <span
          class="menu-toggle-icon"
          :class="{ open: isMenuOpen }"
          aria-hidden="true"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="menu-toggle-text">{{
          isMenuOpen ? "Закрыть" : "Меню"
        }}</span>
      </button>

      <button
        v-if="isMenuOpen"
        class="menu-backdrop"
        type="button"
        aria-label="Закрыть меню"
        @click="closeMenu"
      ></button>

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
        <NuxtLink
          to="/#contact"
          :class="{ active: route.hash === '#contact' }"
          @click="closeMenu"
        >
          Контакты
        </NuxtLink>

        <div class="menu-actions">
          <NuxtLink
            to="/#contact"
            class="btn btn-primary btn-topbar"
            @click="closeMenu"
          >
            Заказать звонок
          </NuxtLink>
          <a
            :href="phoneHref"
            class="phone-link"
            aria-label="Позвонить в Ремонт Квартир"
            @click="closeMenu"
          >
            {{ siteData.phoneDisplay }}
          </a>
        </div>
      </nav>

      <div class="topbar-actions">
        <NuxtLink
          to="/#contact"
          class="btn btn-primary btn-topbar"
          @click="closeMenu"
        >
          Заказать звонок
        </NuxtLink>
        <a
          :href="phoneHref"
          class="phone-link"
          aria-label="Позвонить в Ремонт Квартир"
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

const phoneHref = computed(
  () => `tel:${siteData.phone.replace(/[^+\d]/g, "")}`,
);

const closeMenu = () => {
  isMenuOpen.value = false;
};

const isActive = (to: string) => {
  if (to.includes("#")) {
    const [path, hash] = to.split("#");
    return route.path === (path || "/") && route.hash === `#${hash}`;
  }

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

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
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
  window.addEventListener("keydown", handleKeydown);

  onBeforeUnmount(() => {
    document.body.style.overflow = "";
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("keydown", handleKeydown);
  });
}
</script>
