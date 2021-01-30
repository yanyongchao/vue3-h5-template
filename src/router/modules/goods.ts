import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "Goods" */ '../../views/Goods.vue'),
    children: [
      {
        path: '/detail',
        name: 'GoodsDetail',
        component: () => import(/* webpackChunkName: "GoodsDetail" */ '../../views/GoodsDetail.vue')
      }
    ]
  }
]

export default routes
