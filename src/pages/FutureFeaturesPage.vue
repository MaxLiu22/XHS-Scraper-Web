<template>
  <div class="future-features-page">
    <header class="page-header">
      <div class="header-container">
        <div class="header-brand-section">
          <img :src="logoUrl" alt="Logo" class="logo-img" />
          <div class="header-brand">Xiaohongshu Post Scraper</div>
        </div>
        <nav class="header-nav">
          <router-link to="/">{{ t('footer.navigation.features') }}</router-link>
          <router-link to="/future-features">{{ t('footer.navigation.futureFeatures') }}</router-link>
          <router-link to="/#download">{{ t('footer.navigation.download') }}</router-link>
          <router-link to="/#demo">{{ t('footer.navigation.demo') }}</router-link>
          <router-link to="/#contact">{{ t('footer.navigation.contact') }}</router-link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>

    <main class="future-features-main">
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

          <!-- Feature 5: Multi-Platform Export -->
          <div class="future-feature-card">
            <div class="future-feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="10" height="10" rx="1.5" stroke="#DC2626" stroke-width="2"/>
                <rect x="18" y="8" width="10" height="10" rx="1.5" stroke="#DC2626" stroke-width="2"/>
                <rect x="11" y="20" width="10" height="10" rx="1.5" stroke="#DC2626" stroke-width="2"/>
                <circle cx="16" cy="4" r="2" fill="#DC2626"/>
                <path d="M16 4V8M16 8L9 11M16 8L23 11M16 18L16 20" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="future-feature-title">{{ t('futureFeatures.multiPlatformExport.title') }}</h3>
            <p class="future-feature-description">{{ t('futureFeatures.multiPlatformExport.description') }}</p>
          </div>
        </div>
        
        <div class="request-feature-section">
          <transition name="fade">
            <p v-if="emailCopied" class="email-copied-message">{{ t('futureFeatures.emailCopiedMsg') }}</p>
          </transition>
          <button @click="copyEmail" class="request-feature-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {{ t('futureFeatures.requestFeatureBtn') }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from '../components/LanguageSwitcher.vue';
import logoUrl from '../assets/logo.svg';

const { t } = useI18n();

const email = 'maxliu2025dev@gmail.com';
const emailCopied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 3000);
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
};
</script>

<style scoped>
.future-features-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-header {
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

.header-nav a:hover,
.header-nav a.router-link-active {
  color: #dc2626;
}

.future-features-main {
  flex: 1;
}

.future-features-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 5rem 2rem;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}

.future-feature-card {
  padding: 1.75rem;
  background: white;
  border: 2px solid transparent;
  border-radius: 1.25rem;
  position: relative;
  overflow: hidden;
}

.future-feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-radius: 0.875rem;
  margin-bottom: 1rem;
}

.future-feature-icon svg {
  width: 28px;
  height: 28px;
}

.future-feature-title {
  font-size: 1.0625rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
}

.future-feature-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

.request-feature-section {
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.request-feature-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.25);
}

.request-feature-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.35);
  background: linear-gradient(135deg, #b91c1c 0%, #dc2626 100%);
}

.request-feature-btn:active {
  transform: translateY(0);
}

.request-feature-btn svg {
  flex-shrink: 0;
}

.email-copied-message {
  color: #059669;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  padding: 0.5rem 1rem;
  background: #d1fae5;
  border-radius: 0.375rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1400px) {
  .future-features-container {
    max-width: 1200px;
  }

  .future-features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .future-features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .header-nav {
    display: none;
  }

  .future-features-grid {
    grid-template-columns: 1fr;
  }

  .future-features-title {
    font-size: 2rem;
  }

  .future-feature-card {
    padding: 2rem;
  }

  .request-feature-section {
    margin-top: 3rem;
  }

  .request-feature-btn {
    font-size: 0.9375rem;
    padding: 0.875rem 1.5rem;
    width: 100%;
    max-width: 320px;
  }

  .email-copied-message {
    font-size: 0.8125rem;
    padding: 0.5rem 0.875rem;
  }
}
</style>
