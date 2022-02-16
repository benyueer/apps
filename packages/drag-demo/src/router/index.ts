import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/drag-test',
    name: 'drag-test',
    component: () => import('../views/drag-test/drag-test')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
