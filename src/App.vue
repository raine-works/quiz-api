<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Data goes here...
    }
  }, 
  beforeCreate() {
    this.$store.dispatch('getQuizList')
  }
}
</script>

<style>

* {
  margin: 0;
}

</style>
