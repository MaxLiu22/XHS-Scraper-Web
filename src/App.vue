<script setup>
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import FutureFeaturesSection from './components/FutureFeaturesSection.vue';
import DownloadSection from './components/DownloadSection.vue';
import DemoSection from './components/DemoSection.vue';
import ContactSection from './components/ContactSection.vue';
import logoUrl from './assets/logo.svg';

const { t, locale } = useI18n();

const seoMeta = computed(() => ({
  title: t('meta.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.description'),
    },
    {
      name: 'keywords',
      content: t('meta.keywords'),
    },
    {
      property: 'og:title',
      content: t('meta.title'),
    },
    {
      property: 'og:description',
      content: t('meta.description'),
    },
    {
      name: 'twitter:title',
      content: t('meta.title'),
    },
    {
      name: 'twitter:description',
      content: t('meta.description'),
    },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
}));

useHead(seoMeta);

watch(locale, () => {
  useHead(seoMeta);
});
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="header-container">
        <div class="header-brand-section">
          <img :src="logoUrl" alt="Logo" class="logo-img" />
          <div class="header-brand">Xiaohongshu Post Scraper</div>
        </div>
        <nav class="header-nav">
          <a href="#features">{{ t('footer.navigation.features') }}</a>
          <a href="#future-features">{{ t('footer.navigation.futureFeatures') }}</a>
          <a href="#download">{{ t('footer.navigation.download') }}</a>
          <a href="#demo">{{ t('footer.navigation.demo') }}</a>
          <a href="#contact">{{ t('footer.navigation.contact') }}</a>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>

    <main>
      <HeroSection />
      <FeaturesSection />
      <FutureFeaturesSection />
      <DownloadSection />
      <DemoSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e5e7eb;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.header-brand-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-img {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.header-brand {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  white-space: nowrap;
}

.header-nav {
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.header-nav a {
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.header-nav a:hover {
  color: #dc2626;
}

main {
  flex: 1;
}

@media (max-width: 968px) {
  .header-nav {
    display: none;
  }

  .header-container {
    justify-content: space-between;
  }
}
</style>
