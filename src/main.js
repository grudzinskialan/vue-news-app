import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useNewsStore } from './stores/articles'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const newsStore = useNewsStore();

app.mount('#app')
