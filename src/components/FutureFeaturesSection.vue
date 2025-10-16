<template>
  <section class="future-features" id="future-features">
    <div class="future-features-container">
      <div class="future-features-header">
        <div class="coming-soon-badge">{{ t('futureFeatures.badge') }}</div>
        <h2 class="future-features-title">{{ t('futureFeatures.title') }}</h2>
        <p class="future-features-subtitle">{{ t('futureFeatures.subtitle') }}</p>
      </div>
      <div class="future-features-grid">
        <!-- Feature 1: AI-Powered Insights -->
        <div class="future-feature-card">
          <div class="future-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="#DC2626" stroke-width="2" stroke-linejoin="round"/>
              <circle cx="16" cy="16" r="4" fill="#DC2626"/>
            </svg>
          </div>
          <h3 class="future-feature-title">{{ t('futureFeatures.aiInsights.title') }}</h3>
          <p class="future-feature-description">{{ t('futureFeatures.aiInsights.description') }}</p>
        </div>

        <!-- Feature 2: Explosive Post Filter -->
        <div class="future-feature-card">
          <div class="future-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L18.5 13.5L28 16L18.5 18.5L16 30L13.5 18.5L2 16L13.5 13.5L16 2Z" stroke="#DC2626" stroke-width="2"/>
              <path d="M24 6L25 10L29 11L25 12L24 16L23 12L19 11L23 10L24 6Z" fill="#DC2626"/>
            </svg>
          </div>
          <h3 class="future-feature-title">{{ t('futureFeatures.explosiveFilter.title') }}</h3>
          <p class="future-feature-description">{{ t('futureFeatures.explosiveFilter.description') }}</p>
        </div>

        <!-- Feature 3: Custom Export Builder -->
        <div class="future-feature-card">
          <div class="future-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="24" height="20" rx="2" stroke="#DC2626" stroke-width="2"/>
              <path d="M4 12H28M10 6V26M20 6V26" stroke="#DC2626" stroke-width="2"/>
              <circle cx="15" cy="19" r="2" fill="#DC2626"/>
            </svg>
          </div>
          <h3 class="future-feature-title">{{ t('futureFeatures.customExport.title') }}</h3>
          <p class="future-feature-description">{{ t('futureFeatures.customExport.description') }}</p>
        </div>

        <!-- Feature 4: Automated Monitoring -->
        <div class="future-feature-card">
          <div class="future-feature-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" stroke="#DC2626" stroke-width="2"/>
              <path d="M16 8V16L22 19" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
              <path d="M8 16H6M26 16H24M16 8V6M16 26V24" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="future-feature-title">{{ t('futureFeatures.automatedMonitoring.title') }}</h3>
          <p class="future-feature-description">{{ t('futureFeatures.automatedMonitoring.description') }}</p>
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
.future-features {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #fef2f2 0%, #fff5f5 100%);
  position: relative;
  overflow: hidden;
}

.future-features::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.future-features-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.future-features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.coming-soon-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
}

.future-features-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #111827 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.future-features-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.future-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.future-feature-card {
  padding: 2rem;
  background: white;
  border: 2px solid transparent;
  border-radius: 1.25rem;
  position: relative;
  overflow: hidden;
}

.future-feature-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-radius: 1rem;
  margin-bottom: 1.25rem;
}

.future-feature-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.875rem 0;
  line-height: 1.3;
}

.future-feature-description {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1200px) {
  .future-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .future-features-grid {
    grid-template-columns: 1fr;
  }

  .future-features-title {
    font-size: 2rem;
  }

  .future-feature-card {
    padding: 2rem;
  }
}
</style>

