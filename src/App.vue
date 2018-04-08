<template>
  <div id="app">
    <v-header />
    <v-main />
  </div>
</template>

<script>
import Header from './components/header'
import Main from './components/main'

export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-main': Main
  },
  asyncData ({ eventBus }) {
    return eventBus.getNav()
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
