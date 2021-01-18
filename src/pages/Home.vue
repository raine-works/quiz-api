<template>
  <div>
    <Nav/>
    <div class="content-container">
      <div>
        <ul>
          <li v-for="(quiz, index) in quizList" :key="index" class="list-card" :class="theme">
            <router-link :to="{ name: 'Quiz', params: { id: quiz.id }}" :class="theme">{{ quiz.name }}</router-link>
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
    }, 
    theme() {
      return this.$store.state.general.themeClass
    },
  }
}
</script>

<style lang="scss">

.content-container {
  padding: 12px;
}

.list-card {
  list-style: none;
  max-width: 300px; 
  height: 100px;
  border-radius: 8px;
  overflow: hidden;

  &.light {
    background-color: $white;
    box-shadow: 0 0 18px $light-gray;
  }

  &.dark {
    background-color: $dark-secondary;
    box-shadow: 0 0 18px $black;
  }

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
    
    &.light {
      color: $dark-gray;
    }

    &.dark {
      color: $white;
    }
  }
}

@media screen and (max-width: 1000px) {
  .list-card {
    max-width: 100%;
  }
}

</style>