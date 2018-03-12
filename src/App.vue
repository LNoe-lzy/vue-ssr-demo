<template>
  <div id="app">
    <v-header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less">
html {
  font-size: 12px;
}
body {
  background: #f4f5f5;
}
* {
  list-style: none;
}
#app {
  min-height: calc(100vh);
}
</style>
