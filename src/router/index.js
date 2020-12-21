import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Quiz from '../pages/Quiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'Home', 
    component: Home, 
    meta: {
      title: 'Home', 
      metaTags: [
        {
          name: '', 
          content: ''
        }, 
        {
          property: '', 
          content: ''
        }
      ]
    }
  }, 
  {
    path: '/quiz/:id', 
    name: 'Quiz', 
    component: Quiz, 
    meta: {
      title: 'Quiz', 
      metaTags: [
        {
          name: '', 
          content: ''
        }, 
        {
          property: '', 
          content: ''
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
