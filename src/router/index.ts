import LoginPage from '@/pages/LoginPage.vue'
import UserPage from '@/pages/UserPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
    },
  ],
})

export default router
