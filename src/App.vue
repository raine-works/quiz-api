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
  watch: {
    '$route' (to) {
      document.title = to.meta.title
    }, 
    immediate: true
  }
}
</script>

<style>

</style>
