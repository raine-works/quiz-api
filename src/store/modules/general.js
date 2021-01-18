const state = () => ({
  // Put stuff here
  themeClass: 'light', 
  temeToggle: false,
})

const getters = {
  // Put stuff here
}

const actions = {

  // Toggle theme between light and dark mode. (Action)
  toggleTheme(context) {
    context.commit('toggleTheme')
  },
}

const mutations = {

  // Toggle theme between light and dark mode. (Mutation)
  toggleTheme(state) {
    state.themeToggle = !state.themeToggle
    if(state.themeToggle) {
      state.themeClass = 'dark'
    } else {
      state.themeClass = 'light'
    }
  }
}

export default {
  namespace: true, 
  state, 
  getters, 
  actions, 
  mutations
}