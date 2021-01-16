<template>
  <div>
    <Nav/>
    <div class="content-container">
      <ScoreBar/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ScoreBar from '@/components/ScoreBar.vue'

export default {
  data() {
    return {
      // Stuff goes here
      scoreSheet: null,
    }
  },
  components: {
    Nav,
    ScoreBar,
  },
  beforeCreate() {
    this.$store.dispatch('getQuiz', this.$route.params.id)
  },
  computed: {
    activeQuiz() {
      return this.$store.state.quizzes.activeQuiz
    }, 
    loading() {
      return this.$store.state.quizzes.loading
    }
  }, 
  watch: {
    activeQuiz(newVal) {
      if(newVal === '404') {
        this.$router.push('/404');
      }
    }
  }
}
</script>

<style>

.content-container {
  max-width: 1000px;
  margin: auto;
}

</style>