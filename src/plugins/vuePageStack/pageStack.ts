import { Router } from 'vue-router'
import { PAGE_STACK_CONFIG } from './config'
import { getRandom, hasKey } from '@/utils/common'
import { getSessionStorage, setSessionStorage } from '@/utils/storage'
import { PAGE_STACK } from '@/constants/storage'

const keyName = PAGE_STACK_CONFIG.keyName

type StackRecord = {
  name: string;
  [keyName]: string;
}

let stack: Array<StackRecord> = getSessionStorage(PAGE_STACK) || []

const getStack = () => stack

const routerMixin = (router: Router) => {
  router.beforeEach((to, _from, next) => {
    const query = to.query
    if (!hasKey(to.query, keyName)) {
      query[keyName] = getRandom()
      next({
        path: to.path,
        params: to.params,
        query: to.query
      })
    } else {
      const index = stack.findIndex(item => item[keyName] === query[keyName])
      if (index === -1) {
        to.params.routerDir = PAGE_STACK_CONFIG.forwardName
      } else {
        to.params.routerDir = PAGE_STACK_CONFIG.backName
      }
      next()
    }
  })
  router.afterEach((to) => {
    const key: string = (to.query[keyName] as string)
    const index = stack.findIndex(item => item[keyName] === key)
    if (index > -1) {
      stack = stack.slice(0, index + 1)
    } else {
      stack.push({
        name: (to.name) as string,
        [keyName]: key
      })
    }
    setSessionStorage(PAGE_STACK, stack)
  })
}

export {
  routerMixin,
  getStack,
  StackRecord
}
