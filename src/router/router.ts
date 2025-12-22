import { createRouter, createWebHistory } from 'vue-router'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'

const routers = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/news',
    component: News,
  },
  {
    path: '/about',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})
export default router
