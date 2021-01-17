const state = {
  routerDirection: '',
  navigations: [] as string[]
}

type RouterStateType = typeof state
type RouterPayloadType = {
  routerDirection: string;
  path: string;
  index: number;
}

const mutations = {
  UPDATE_ROUTER_DIRECTION (state: RouterStateType, payload: Pick<RouterPayloadType, 'routerDirection'>) {
    state.routerDirection = payload.routerDirection
  },
  UPDATE_NAVIGATIONS (state: RouterStateType, payload: Pick<RouterPayloadType, 'path'>) {
    state.navigations.push(payload.path)
  },
  DELETE_NAVIGATION (state: RouterStateType, payload: Pick<RouterPayloadType, 'index'>) {
    const index = payload.index
    state.navigations = state.navigations.slice(0, index + 1)
  },
  CLEAR_NAVIGATIONS (state: RouterStateType) {
    state.navigations = []
  }
}

const getters = {
  navigations: (state: RouterStateType) => state.navigations
}

export {
  RouterStateType
}

export default {
  state,
  mutations,
  getters
}
