<template>
  <div>
    <h1 v-if="activeQuiz">We got the data!</h1>
    <h1 v-if="loading">Content is loading...</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Stuff goes here
    }
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

</style>