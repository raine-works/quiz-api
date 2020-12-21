import axios from 'axios'

const state = () => ({

  activeQuiz: { /* Empty object */ }, 
  loading: true

})

const getters = {
  // Put stuff here
}

const actions = {
  
  // Get quiz from slug.
  async getQuiz(context, quizId) {
    const response = await axios.get(`https://quizzes.raineworks.com/api/quiz/${quizId}`)
    let quiz = response.data
    context.commit('getQuiz', quiz)
    context.commit('isLoading')
  }, 

  isLoading(context) {
    context.commit('isLoading')
  }

}

const mutations = {
  
  // Add requested quiz data to the activeQuiz object.
  getQuiz(state, quiz) {
    state.activeQuiz = quiz
  }, 

  // Toggle loading status.
  isLoading(state) {
    state.loading = !state.loading
  }

}

export default {
  namespace: true, 
  state, 
  getters, 
  actions, 
  mutations
}