<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br>
    <i class="fab fa-medium"></i>
    <i class="far fa-envelope"></i>
  </nav>
  <router-view/>
</template>

<script>

export default {
  
  setup() {
    return {
      msg: 'Hello Vue!'
    }
  },
}
</script>

<style>
#app {
  height: 100vh;
  width: 50% !important;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #030f1b;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
