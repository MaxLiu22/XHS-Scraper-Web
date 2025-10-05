<template>
  <section class="contact" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="contact-title">{{ t('contact.title') }}</h2>
      </div>
      <div class="contact-links">
        <a href="mailto:support@example.com" class="contact-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ t('contact.email') }}</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.579 9.521 21.269 9.521 21.004C9.521 20.766 9.512 20.146 9.508 19.318C6.726 19.91 6.139 17.881 6.139 17.881C5.685 16.727 5.029 16.418 5.029 16.418C4.121 15.812 5.098 15.824 5.098 15.824C6.101 15.895 6.629 16.842 6.629 16.842C7.521 18.358 8.97 17.917 9.539 17.662C9.631 17.013 9.889 16.573 10.175 16.323C7.955 16.07 5.62 15.205 5.62 11.315C5.62 10.221 6.01 9.327 6.649 8.627C6.546 8.374 6.203 7.348 6.747 5.969C6.747 5.969 7.586 5.699 9.497 7.066C10.294 6.845 11.147 6.735 12 6.731C12.853 6.735 13.706 6.845 14.504 7.066C16.414 5.699 17.251 5.969 17.251 5.969C17.797 7.348 17.453 8.374 17.351 8.627C17.991 9.327 18.379 10.221 18.379 11.315C18.379 15.215 16.04 16.067 13.813 16.315C14.172 16.627 14.491 17.244 14.491 18.186C14.491 19.543 14.479 20.634 14.479 21.004C14.479 21.271 14.659 21.584 15.167 21.488C19.138 20.163 22 16.417 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
          </svg>
          <span>{{ t('contact.github') }}</span>
        </a>
        <a href="#faq" class="contact-link">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>{{ t('contact.faq') }}</span>
        </a>
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
