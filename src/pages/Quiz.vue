<template>
  <div>
    <h1>{{ activeQuiz }}</h1>
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
    }
  }
}
</script>

<style>

</style>