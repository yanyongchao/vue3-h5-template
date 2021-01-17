import store from '@/store'
import { RouterType } from '@/router'

const PATH_KEY = 'PATH_KEY'
let isFirst = true

const routerEach = (router: RouterType) => {
  router.beforeEach((to, from, next) => {
    const query = { ...to.query }
    if (query[PATH_KEY]) {
      if (isFirst) {
        isFirst = false
        return next()
      }
      const toIndex = store.state.router.navigations.findIndex(path => path === to.fullPath)
      if (toIndex > -1) {
        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'back' })
        store.commit('DELETE_NAVIGATION', { index: toIndex })
      } else {
        store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'forward' })
        store.commit('UPDATE_NAVIGATIONS', { path: to.fullPath })
      }
      next()
    } else {
      query[PATH_KEY] = Math.random().toString(16).substring(2)
      next({ path: to.path, query, replace: true })
    }
  })
}

export default routerEach
