import Vue from 'vue'
import Vuex from 'vuex'
import quizzes from './modules/quizzes'
import score from './modules/score'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    quizzes, 
    score
  }
})
