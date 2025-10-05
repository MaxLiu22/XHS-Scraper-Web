<template>
  <section class="demo" id="demo">
    <div class="demo-container">
      <div class="demo-header">
        <h2 class="demo-title">{{ t('demo.title') }}</h2>
        <p class="demo-subtitle">{{ t('demo.subtitle') }}</p>
      </div>
      <div class="demo-content">
        <div class="demo-preview">
          <div class="videos-grid">
            <div class="video-container">
              <video 
                :src="demoVideoCN" 
                controls 
                muted 
                loop 
                class="demo-video"
                :poster="demoVideoCN"
              >
                Your browser does not support the video tag.
              </video>
              <div class="video-label">中文演示</div>
            </div>
            <div class="video-container">
              <video 
                :src="demoVideoEN" 
                controls 
                muted 
                loop 
                class="demo-video"
                :poster="demoVideoEN"
              >
                Your browser does not support the video tag.
              </video>
              <div class="video-label">English Demo</div>
            </div>
            <div class="video-container">
              <video 
                :src="demoVideoKR" 
                controls 
                muted 
                loop 
                class="demo-video"
                :poster="demoVideoKR"
              >
                Your browser does not support the video tag.
              </video>
              <div class="video-label">한국어 데모</div>
            </div>
          </div>
        </div>
        <p class="demo-caption">{{ t('demo.sampleCaption') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import demoVideoCN from '../assets/demo_video/cn.mp4';
import demoVideoEN from '../assets/demo_video/en.mp4';
import demoVideoKR from '../assets/demo_video/kr.mp4';

const { t } = useI18n();
</script>

<style scoped>
.demo {
  padding: 5rem 2rem;
  background-color: white;
}

.demo-container {
  max-width: 1600px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 4rem;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
}

.demo-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0;
}

.demo-content {
  max-width: 900px;
  margin: 0 auto;
}

.demo-preview {
  margin-bottom: 2rem;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.video-container {
  background-color: #1f2937;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: transform 0.3s ease;
  aspect-ratio: 9/16;
  display: flex;
  flex-direction: column;
}

.video-container:hover {
  transform: translateY(-4px);
}

.demo-video {
  width: 100%;
  flex: 1;
  display: block;
  border-radius: 0.75rem 0.75rem 0 0;
  transition: transform 0.3s ease;
  object-fit: cover;
}

.video-label {
  padding: 0.75rem;
  background-color: #111827;
  color: #e5e7eb;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0 0 0.75rem 0.75rem;
  flex-shrink: 0;
}

.demo-caption {
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
  font-style: italic;
  margin: 0;
}

@media (max-width: 768px) {
  .demo-title {
    font-size: 2rem;
  }

  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .video-container {
    aspect-ratio: 9/16;
  }

  .video-label {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .videos-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>
