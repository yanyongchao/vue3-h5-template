import store from '@/store'
import { App } from 'vue'
import { Router } from 'vue-router'

const PATH_KEY = 'pathKey'

const routerEach = (router: Router) => {
  router.beforeEach((to, _from, next) => {
    next()
    // const query = { ...to.query }
    // if (query[PATH_KEY]) {
    //   // 首次进入
    //   if (!from.name) {
    //     store.commit('UPDATE_NAVIGATIONS', { path: to.fullPath })
    //     return next()
    //   }
    //   const toIndex = store.state.router.navigations.findIndex(path => path === to.fullPath)
    //   if (toIndex > -1) {
    //     store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'back' })
    //     store.commit('DELETE_NAVIGATION', { index: toIndex })
    //   } else {
    //     store.commit('UPDATE_ROUTER_DIRECTION', { routerDirection: 'forward' })
    //     store.commit('UPDATE_NAVIGATIONS', { path: to.fullPath })
    //   }
    //   next()
    // } else {
    //   query[PATH_KEY] = Math.random().toString(16).substring(2)
    //   next({ path: to.path, query, replace: true })
    // }
  })
}

export default {
  install (_app: App, options: { router: Router }) {
    routerEach(options.router)
  }
}
