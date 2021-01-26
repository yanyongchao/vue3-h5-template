import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "goods" */ '../../views/Home.vue')

  },
  {
    path: '/about1',
    name: 'About',
    component: () => import(/* webpackChunkName: "GoodsDetail" */ '../../views/About.vue'),
    children: [
      {
        path: 'children',
        name: 'AboutChild',
        component: () => import(/* webpackChunkName: "AboutChild" */ '../../views/Child.vue')
      }
    ]
  },
  {
    path: '/page3111',
    name: 'Page3',
    component: () => import(/* webpackChunkName: "GoodsDetail" */ '../../views/page3.vue')
  }
]

export default routes
