<template>
  <router-view/>
</template>
<script>
export default {
  name: 'app',
  mounted () {
    // document.addEventListener('contextmenu', event => event.preventDefault());
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

body {
  overflow: hidden;
}

#app {
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  overflow-y: none;
}
</style>
