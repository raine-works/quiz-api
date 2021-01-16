<template>
  <div>
    <Nav/>
    <div class="content-container">
      <div>
        <ul>
          <li v-for="(quiz, index) in quizList" :key="index">
            <router-link :to="{ name: 'Quiz', params: { id: quiz.id }}">{{ quiz.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  data() {
    return {
      //
    }
  }, 
  components: {
    Nav,
  }, 
  computed: {
    quizList() {
      return this.$store.state.quizzes.quizList
    }
  }
}
</script>

<style>

</style>