import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Category.vue'),
    },
    {
      path: '/category/:category',
      component: () => import('../views/Category.vue'),
      props: true
    },
    {
      path: '/search/:query',
      component: () => import('../views/Search.vue'),
      props: true
    }
  ]
})

export default router
