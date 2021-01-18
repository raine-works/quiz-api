<template>
  <div id="app" :class="theme">
    <div class="container">
      <Loader v-if="isLoading"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'

export default {
  data() {
    return {
      // Data goes here...
    }
  }, 
  components: {
    Loader
  },
  beforeCreate() {
    this.$store.dispatch('getQuizList')

    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.dispatch('toggleTheme')
    }
  }, 
  computed: {
    theme() {
      return this.$store.state.general.themeClass
    },
    isLoading() {
      return this.$store.state.quizzes.loading
    },
  },
}
</script>

<style lang="scss">

.container {
  margin: auto;
  max-width: $max-contain-width;
}

</style>