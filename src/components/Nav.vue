<template>
  <div id="nav">
    <div class="brand-icon"></div>
    <div class="desktop-links">
      <ul>
        <li v-for="(navLink, index) in navLinks" :key="index">
          <router-link :to="{ name: navLink.name }" :class="navLink.class">{{ navLink.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { 
          name: 'Home',
          text: 'Home'
        }, 
        {
          name: 'Contact', 
          text: 'Contact'
        }
      ], 
    }
  }
}
</script>

<style lang="scss">

#nav {
  width: 100%;
  height: 60px;
  background-color: $menu-bar-main;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    color: #ffffff;
    transition: .5s;
  }

  a:hover {
    background-color: $brand-color-main;
  }

  a.router-link-exact-active {
    background-color: $brand-color-main;
  }
}

</style>