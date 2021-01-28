const state = {
  routerDirection: '',
  navigations: [] as string[]
}

type RouterState = typeof state
type RouterPayload = {
  routerDirection: string;
  path: string;
  index: number;
}

const mutations = {
  UPDATE_ROUTER_DIRECTION (state: RouterState, payload: Pick<RouterPayload, 'routerDirection'>) {
    state.routerDirection = payload.routerDirection
  },
  UPDATE_NAVIGATIONS (state: RouterState, payload: Pick<RouterPayload, 'path'>) {
    state.navigations.push(payload.path)
  },
  DELETE_NAVIGATION (state: RouterState, payload: Pick<RouterPayload, 'index'>) {
    const index = payload.index
    state.navigations = state.navigations.slice(0, index + 1)
  },
  CLEAR_NAVIGATIONS (state: RouterState) {
    state.navigations = []
  }
}

const getters = {
  navigations: (state: RouterState) => state.navigations
}

export {
  RouterState
}

export default {
  state,
  mutations,
  getters
}
