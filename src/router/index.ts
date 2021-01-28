import { createRouter, Router, createWebHistory, RouteRecordRaw } from 'vue-router'
import goodsRoutes from './modules/goods'

const routes: Array<RouteRecordRaw> = [
  ...goodsRoutes
]

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
