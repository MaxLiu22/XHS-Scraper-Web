<template>
  <section class="download" id="download">
    <div class="download-container">
      <div class="download-header">
        <h2 class="download-title">{{ t('download.title') }}</h2>
        <p class="download-subtitle">{{ t('download.subtitle') }}</p>
      </div>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3 class="step-title">{{ t('download.step1.title') }}</h3>
          <p class="step-description">{{ t('download.step1.description') }}</p>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <h3 class="step-title">{{ t('download.step2.title') }}</h3>
          <p class="step-description">{{ t('download.step2.description') }}</p>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <h3 class="step-title">{{ t('download.step3.title') }}</h3>
          <p class="step-description">{{ t('download.step3.description') }}</p>
        </div>
      </div>
      
      <!-- Video Tutorial Section -->
      <div class="video-section">
        <h3 class="video-section-title">{{ t('download.tutorialTitle') }}</h3>
        <div class="video-container">
          <video :src="tutorialVideo" controls class="tutorial-video"></video>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import tutorialVideo from '../assets/demo_video/xhs_tool_install_tutorial_Vh_01.mp4';

const { t } = useI18n();
</script>

<style scoped>
.download {
  padding: 5rem 2rem;
  background-color: #f9fafb;
}

.download-container {
  max-width: 1200px;
  margin: 0 auto;
}

.download-header {
  text-align: center;
  margin-bottom: 4rem;
}

.download-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
}

.download-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.step-card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: #dc2626;
  box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.1);
  transform: translateY(-4px);
}

.step-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 1rem 0;
}

.step-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

.download-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.75rem;
  max-width: 800px;
  margin: 0 auto;
}

.download-note svg {
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.download-note p {
  margin: 0;
  color: #991b1b;
  font-size: 0.875rem;
  line-height: 1.5;
}

.video-section {
  margin-top: 3rem;
  text-align: center;
}

.video-section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 2rem 0;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
}

.tutorial-video {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (max-width: 968px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .download-title {
    font-size: 2rem;
  }
}
</style>
