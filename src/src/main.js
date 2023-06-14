import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import Vue from 'vue'


// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import { useNewsStore } from './stores/articles'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
// app.use(BootstrapVue)

const newsStore = useNewsStore();

app.mount('#app')
