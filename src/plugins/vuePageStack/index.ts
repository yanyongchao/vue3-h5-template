import { App } from 'vue'
import { Router } from 'vue-router'
import { routerMixin, getStack, StackRecord } from './pageStack'

interface PageStack {
  getStack: () => Array<StackRecord>;
}

const VuePageStackPlugin = {
  install (app: App, options: { router: Router }) {
    const router = options.router
    if (!router) {
      throw Error('\n vue-router is necessary. \n\n')
    }
    routerMixin(router)
    const pageStack: PageStack = {
      getStack
    }
    app.provide('pageStack', pageStack)
  }
}

export {
  PageStack
}

export default VuePageStackPlugin
