import axios from 'axios'

const state = () => ({

  quizList: null,
  activeQuiz: null, 
  loading: false

})

const getters = {
  // Put stuff here
}

const actions = {

  // Get all quizzes. 
  async getQuizList(context) {
    let quizList;

    context.commit('isLoading')

    axios.get('https://quizzes.raineworks.com/api/quiz/all')
    .then((res) => {
      quizList = res.data
      context.commit('getQuizList', quizList)

      context.commit('isLoading')
    })
  },
  
  // Get quiz from slug.
  async getQuiz(context, quizId) {
    let quiz;

    // Triggers loading state to TRUE while waiting for response data.
    context.commit('isLoading')

    axios.get(`https://quizzes.raineworks.com/api/quiz/${quizId}`)
    .then((res) => {
      quiz = res.data

      context.commit('getQuiz', quiz)

      // Triggers loading state to FALSE when data is resolved.
      context.commit('isLoading')
    })
    .catch((err) => {
      console.log(`${err.message}. There is no quiz by that name...`)
      quiz = '404'

      context.commit('getQuiz', quiz)

      // Triggers loading state to FALSE when data is resolved.
      context.commit('isLoading')
    }) 
  }, 

  isLoading(context) {
    context.commit('isLoading')
  }

}

const mutations = {

  // Get all quizzes on site load. 
  getQuizList(state, list) {
    state.quizList = list
  },
  
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