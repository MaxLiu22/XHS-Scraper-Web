<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <div class="logo">
          <img :src="logoUrl" alt="Logo" class="logo-img" />
        </div>
        <h1 class="hero-title">{{ t('hero.title') }}</h1>
        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="downloadZip">{{ t('hero.downloadBtn') }}</button>
          <button class="btn btn-secondary">{{ t('hero.viewDemoBtn') }}</button>
        </div>
        <p class="language-notice">{{ t('hero.languageNotice') }}</p>
      </div>
      <div class="hero-image">
        <div class="screenshot-placeholder">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" rx="8" fill="#F3F4F6"/>
            <rect x="20" y="20" width="360" height="40" rx="4" fill="#E5E7EB"/>
            <rect x="20" y="70" width="170" height="100" rx="4" fill="#D1D5DB"/>
            <rect x="210" y="70" width="170" height="100" rx="4" fill="#D1D5DB"/>
            <rect x="20" y="180" width="360" height="20" rx="4" fill="#E5E7EB"/>
            <rect x="20" y="210" width="280" height="20" rx="4" fill="#E5E7EB"/>
            <rect x="20" y="240" width="200" height="20" rx="4" fill="#E5E7EB"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import logoUrl from '@assets/logo.svg';
import zipUrl from '../assets/ext-pkg/xhs-all-in-one.zip';

const { t } = useI18n();

function downloadZip() {
  const link = document.createElement('a');
  link.href = zipUrl;
  link.download = 'xhs-all-in-one.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<style scoped>
.hero {
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
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

.screenshot-placeholder {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.screenshot-placeholder:hover {
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
