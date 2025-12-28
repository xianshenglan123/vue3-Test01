import { createRouter, createWebHistory } from 'vue-router'
import News from '@/pages/views/News.vue'
import About from '@/pages/views/About.vue'
import Home from '@/pages/views/Home.vue'
import Detail from '@/pages/views/Detail.vue'
const routers = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        name: 'xiangqing',
        path: 'detail',
        component: Detail,
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})
export default router
