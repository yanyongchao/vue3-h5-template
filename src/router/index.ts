import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerEach from './settings'
import goodsRoutes from './modules/goods'

const routes: Array<RouteRecordRaw> = [
  ...goodsRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

routerEach(router)

type RouterType = typeof router

export {
  RouterType
}

export default router
