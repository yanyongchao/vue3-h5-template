import { Store, createStore } from 'vuex'
import { IStore } from '@/typings/store'
import router from './modules/router'

const store: Store<IStore> = createStore({
  modules: {
    router
  }
})

window.$store = store

export default store
