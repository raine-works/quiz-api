import Vue from 'vue'
import Vuex from 'vuex'
import quizzes from './modules/quizzes'
import score from './modules/score'
import general from './modules/general'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    quizzes, 
    score, 
    general
  }
})
