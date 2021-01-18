<template>
  <div id="nav">
    <div class="nav-card" :class="theme">
      <div class="brand-icon">
        <router-link :to="{ name: 'Home' }" :class="theme">
          <h3><i class="fas fa-meteor"></i>Quizly</h3>
        </router-link>
      </div>
      <div class="desktop-links">
        <ul>
          <li v-for="(navLink, index) in navLinks" :key="index">
            <router-link :to="{ name: navLink.name }" :class="theme">{{ navLink.text }}</router-link>
          </li>
          <li>
            <button :class="theme" @click="toggleTheme">
              <i v-if="theme == 'light'" class="fas fa-moon"></i>
              <i v-else class="fas fa-sun"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: 'Contact', 
          text: 'Contact'
        }
      ], 
    }
  }, 
  computed: {
    theme() {
      return this.$store.state.general.themeClass
    },
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>

<style lang="scss">

#nav {
  padding: 12px;
}

.nav-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
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
}

.brand-icon {
  display: flex;
  height: 100%;

  a {
    color: $brand-color-main;
    text-decoration: none;
    padding: 0px 12px;
    display: flex;
    align-items: center;

    &:hover {
    background-color: $brand-color-main;
    color: $white;
    }
  }

  i {
    margin-right: 8px;
  }
}

.desktop-links {
  display: flex;
  height: 100%;

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    height: 100%;
  }

  li {
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
  }

  a {
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0px 12px;

    &.light {
      color: $dark-gray;
    }

    &.dark {
      color: $white;
    }

    &:hover {
    background-color: $brand-color-main;
    color: $white;
    }

    &.router-link-exact-active {
    color: $brand-color-main;

      &:hover {
        color: $white;
      }
    }
  }

  button {
    height: 100%;
    padding: 0px 24px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.2em;

    &.light {
      color: $dark-gray;
      background-color: $white;
    }

    &.dark {
      color: $white;
      background-color: $dark-secondary;
    }

    &:hover {
      background-color: $brand-color-main;
      color: $white;
    }
  }
}

</style>