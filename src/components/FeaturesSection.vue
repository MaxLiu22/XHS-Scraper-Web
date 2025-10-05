<template>
  <section class="features" id="features">
    <div class="features-container">
      <div class="features-header">
        <h2 class="features-title">{{ t('features.title') }}</h2>
        <p class="features-subtitle">{{ t('features.subtitle') }}</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="24" height="24" rx="2" stroke="#DC2626" stroke-width="2"/>
              <path d="M4 10H28" stroke="#DC2626" stroke-width="2"/>
              <path d="M10 4V28" stroke="#DC2626" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="feature-title">{{ t('features.extraction.title') }}</h3>
          <p class="feature-description">{{ t('features.extraction.description') }}</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4L28 16L16 28L4 16L16 4Z" stroke="#DC2626" stroke-width="2" stroke-linejoin="round"/>
              <path d="M16 10L22 16L16 22L10 16L16 10Z" fill="#DC2626"/>
            </svg>
          </div>
          <h3 class="feature-title">{{ t('features.export.title') }}</h3>
          <p class="feature-description">{{ t('features.export.description') }}</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="#DC2626" stroke-width="2"/>
              <path d="M16 8V16L22 20" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="feature-title">{{ t('features.filtering.title') }}</h3>
          <p class="feature-description">{{ t('features.filtering.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.features {
  padding: 5rem 2rem;
  background-color: white;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
}

.features-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  transition: all 0.3s ease;
  background-color: white;
}

.feature-card:hover {
  border-color: #dc2626;
  box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.1);
  transform: translateY(-4px);
}

.feature-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fef2f2;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
}

.feature-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 968px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .features-title {
    font-size: 2rem;
  }
}
</style>
