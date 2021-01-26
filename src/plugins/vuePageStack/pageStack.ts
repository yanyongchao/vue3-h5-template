import { Router } from 'vue-router'
import { PageStackConfig } from './config'
import { getRandom, hasKey } from '@/utils/common'

const keyName = PageStackConfig.keyName

type StackRecord = {
  name: string;
  [keyName]: string;
}

let stack: Array<StackRecord> = []

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
  })
}

export {
  routerMixin,
  getStack,
  StackRecord
}
