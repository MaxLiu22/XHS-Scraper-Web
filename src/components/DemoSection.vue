<template>
  <section class="demo" id="demo">
    <div class="demo-container">
      <div class="demo-header">
        <h2 class="demo-title">{{ t('demo.title') }}</h2>
        <p class="demo-subtitle">{{ t('demo.subtitle') }}</p>
      </div>
      <div class="demo-content">
        <div class="demo-preview">
          <div class="preview-window">
            <div class="window-header">
              <div class="window-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="window-title">extracted_data.json</div>
            </div>
            <div class="window-content">
              <pre class="code-preview">{{ sampleData }}</pre>
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

const { t } = useI18n();

const sampleData = computed(() => {
  return `{
  "posts": [
    {
      "id": "post_12345",
      "title": "Beautiful Summer Outfit Ideas",
      "content": "Check out these amazing...",
      "author": {
        "name": "FashionLover",
        "followers": 15200
      },
      "engagement": {
        "likes": 1520,
        "comments": 89,
        "shares": 45
      },
      "tags": ["fashion", "summer", "style"],
      "images": 4,
      "publishedAt": "2025-10-01T10:30:00Z"
    }
  ]
}`;
});
</script>

<style scoped>
.demo {
  padding: 5rem 2rem;
  background-color: white;
}

.demo-container {
  max-width: 1200px;
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

.preview-window {
  background-color: #1f2937;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.window-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #111827;
  border-bottom: 1px solid #374151;
}

.window-dots {
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background-color: #ef4444;
}

.dot.yellow {
  background-color: #f59e0b;
}

.dot.green {
  background-color: #10b981;
}

.window-title {
  color: #9ca3af;
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
}

.window-content {
  padding: 1.5rem;
  overflow-x: auto;
}

.code-preview {
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
  white-space: pre;
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

  .window-content {
    padding: 1rem;
  }

  .code-preview {
    font-size: 0.75rem;
  }
}
</style>
