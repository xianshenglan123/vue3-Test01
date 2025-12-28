import { createRouter, createWebHistory } from 'vue-router'
import Mitt from '@/pages/Mitt.vue'
import VModel from '@/pages/V-Model.vue'
import Attrs from '@/pages/Attrs.vue'
import RefsAndParent from '@/pages/refsAndParent.vue'
import Provide from '@/pages/Provide.vue'
import Pinia from '@/pages/Pinia.vue'
import Slot from '@/pages/slot.vue'
import CEvent from '@/pages/custmeEvent/CEvent.vue'
import Father from '@/pages/Props/Father.vue'

const routes = [
  {
    path: '/props',
    component: Father,
  },
  {
    path: '/customerEvent',
    component: CEvent,
  },
  {
    path: '/mitt',
    component: Mitt,
  },
  {
    path: '/vModel',
    component: VModel,
  },
  {
    path: '/attrs',
    component: Attrs,
  },
  {
    path: '/refs',
    component: RefsAndParent,
  },
  {
    path: '/provide',
    component: Provide,
  },
  {
    path: '/pinia',
    component: Pinia,
  },
  {
    path: '/slot',
    component: Slot,
  },
  {
    path: '/',
    redirect: '/props',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
