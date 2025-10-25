import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(i18n)
app.use(head)
app.use(router)
app.mount('#app')
