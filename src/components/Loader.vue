<template>
  <div id="loader" :class="theme">
    <div class="loading-spinner" :class="theme"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    theme() {
      return this.$store.state.general.themeClass
    },
  },
}
</script>

<style lang="scss">

#loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;

  &.light {
    background-color: $white;
  }

  &.dark {
    background-color: $dark-primary;
  }
}

.loading-spinner {
  width: 100px;
  height: 100px;
  display: inline-block;
  border-radius: 50%;
  animation: 1s spin infinite ease-in-out;

  &.light {
    border: 3px solid rgba(51, 51, 51, 0.2);
    border-top-color: $dark-primary;
  }

  &.dark {
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top-color: $white;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>