import { App } from 'vue'
import { Router } from 'vue-router'
import { routerMixin, getStack, StackRecord } from './pageStack'
import { PAGE_STACK_CONFIG } from './config'

interface PageStack {
  getStack: () => Array<StackRecord>;
}

const vuePageStackPlugin = {
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
  PageStack,
  PAGE_STACK_CONFIG
}

export default vuePageStackPlugin
