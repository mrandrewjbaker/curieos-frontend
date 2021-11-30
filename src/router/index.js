import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/System/UI/Fragments/Login/Login.vue';
import Desktop from  '@/System/UI/Fragments/Desktop/Desktop.vue';
const routes = [
  {
    path: '/',
    name: 'Desktop',
    component: Desktop
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
