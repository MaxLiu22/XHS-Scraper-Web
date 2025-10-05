<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="changeLanguage" class="language-select">
      <option value="en">English</option>
      <option value="zh-CN">中文</option>
      <option value="ko">한국어</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

const changeLanguage = () => {
  locale.value = currentLocale.value;
  document.documentElement.lang = currentLocale.value;
};

watch(locale, (newLocale) => {
  currentLocale.value = newLocale;
});
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
}

.language-select {
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-select:hover {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.language-select:focus {
  outline: none;
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}
</style>
