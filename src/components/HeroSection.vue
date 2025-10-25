<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">{{ t('hero.title') }}</h1>
        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="downloadZip">{{ t('hero.downloadBtn') }}</button>
          <button class="btn btn-secondary" @click="scrollToDemo">{{ t('hero.viewDemoBtn') }}</button>
        </div>
        <p class="language-notice">{{ t('hero.languageNotice') }}</p>
      </div>
      <div class="hero-image">
        <div class="poster-container">
          <img :src="currentPoster" :alt="t('hero.title')" class="poster-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import logoUrl from '@assets/logo.svg';
import zipUrl from '../assets/ext-pkg/xhs-post-tool.zip';
import posterCN from '../assets/poster/CN.png';
import posterEN from '../assets/poster/EN.png';
import posterKR from '../assets/poster/KR.png';

const { t, locale } = useI18n();

// Get the appropriate poster image based on current locale
const currentPoster = computed(() => {
  switch (locale.value) {
    case 'zh-CN':
      return posterCN;
    case 'ko':
      return posterKR;
    case 'en':
    default:
      return posterEN;
  }
});

function downloadZip() {
  const link = document.createElement('a');
  link.href = zipUrl;
  link.download = 'xhs-post-tool.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function scrollToDemo() {
  const demoSection = document.getElementById('demo');
  if (demoSection) {
    demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>

<style scoped>
.hero {
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.logo {
  width: 48px;
  height: 48px;
}

.logo-img {
  width: 48px;
  height: 48px;
  display: block;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
  margin: 0;
}

.hero-tagline {
  font-size: 1.25rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #dc2626;
  color: white;
}

.btn-primary:hover {
  background-color: #b91c1c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

.btn-secondary {
  background-color: white;
  color: #111827;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
  border-color: #dc2626;
  color: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.language-notice {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 0.5rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.poster-container {
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.poster-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.poster-container:hover {
  transform: scale(1.02);
}

.poster-container:hover .poster-image {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
