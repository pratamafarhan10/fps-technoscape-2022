<template>
  <div class="grid grid-cols-3 h-screen">
    <div>01</div>
    <div class="bg-slate-50">
      <router-view />
    </div>
    <div>03</div>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('auth/tryLogin');
  }
}
</script>

<!-- <style>
#app {
  height: 100%;
  width: 50% !important;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
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
</style> -->
