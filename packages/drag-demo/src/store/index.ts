import { createStore } from 'vuex'

export default createStore({
  state: {
    componentData: []
  },
  mutations: {
    addComponent(state: any, comp: unknown) {
      state.componentData.push(comp)
    }
  },
  actions: {
  },
  modules: {
  }
})
