<template>
  <section class="contact" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="contact-title">{{ t('contact.title') }}</h2>
      </div>
      <div class="contact-links">
        <button @click="copyEmail" class="contact-link email-copy-btn" :class="{ copied: emailCopied }">
          <svg v-if="!emailCopied" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ t('contact.email') }} : {{ email }}</span>
          <span v-if="emailCopied" class="copied-badge">{{ t('contact.emailCopied') }}</span>
        </button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="8" fill="#DC2626"/>
              <path d="M16 14H32V18H16V14Z" fill="white"/>
              <path d="M16 22H28V26H16V22Z" fill="white"/>
              <path d="M16 30H24V34H16V30Z" fill="white"/>
            </svg>
          </div>
          <p class="footer-disclaimer">{{ t('footer.disclaimer') }}</p>
        </div>
        <div class="footer-section">
          <h4 class="footer-heading">{{ t('features.title') }}</h4>
          <nav class="footer-nav">
            <a href="#features">{{ t('footer.navigation.features') }}</a>
            <a href="#download">{{ t('footer.navigation.download') }}</a>
            <a href="#demo">{{ t('footer.navigation.demo') }}</a>
            <a href="#contact">{{ t('footer.navigation.contact') }}</a>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-notice">{{ t('footer.languageNotice') }}</p>
        <p class="footer-copyright">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const email = 'maxliu2025dev@gmail.com';
const emailCopied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy email:', err);
  }
};
</script>

<style scoped>
.contact {
  padding: 5rem 2rem;
  background-color: #f9fafb;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background-color: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  text-decoration: none;
  color: #111827;
  font-weight: 600;
  transition: all 0.2s ease;
}

.contact-link:hover {
  border-color: #dc2626;
  color: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
}

.email-copy-btn {
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}

.email-copy-btn.copied {
  border-color: #16a34a;
  color: #16a34a;
  background-color: #f0fdf4;
}

.copied-badge {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: #16a34a;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 9999px;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.footer {
  background-color: #111827;
  color: white;
  padding: 3rem 2rem 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo {
  width: 32px;
  height: 32px;
}

.footer-disclaimer {
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
}

.footer-heading {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-nav a:hover {
  color: #dc2626;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid #374151;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer-notice,
.footer-copyright {
  color: #6b7280;
  font-size: 0.75rem;
  margin: 0;
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 2rem;
  }

  .contact-links {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-link {
    justify-content: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
