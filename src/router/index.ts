import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerEach from './settings'
import goodsRoutes from './modules/goods'

const routes: Array<RouteRecordRaw> = [
  ...goodsRoutes
]

type RouterType = ReturnType<typeof createRouter>

const router: RouterType = createRouter({
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

routerEach(router)

export {
  RouterType
}

export default router
