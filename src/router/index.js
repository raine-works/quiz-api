import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Quiz from '../pages/Quiz.vue'
import FourZeroFour from '../pages/FourZeroFour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', 
    redirect: '/404'
  },
  {
    path: '/404', 
    name: '404', 
    component: FourZeroFour, 
    meta: {
      title: 'Oops - 404', 
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

// Dynamically updates the page title.
router.beforeEach((to, from, next) => {
  if(to.name == 'Quiz') {
    document.title = `${to.params.id} - ${to.meta.title}`
  } else {
    document.title = to.meta.title
  }
  next()
})

export default router
