<template>
  <div id="app">
    <v-header></v-header>
    <div class="main">
      <div class="main-wrapper">
        <v-list
          v-for="item in list"
          :key="item.id"
          :item="item"
        ></v-list>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from '../data.json'
import Header from './components/header'
import List from './components/list.vue'

export default {
  name: 'App',
  components: {
    'v-header': Header,
    'v-list': List
  },
  data () {
    return {
      list: mockData.data
    }
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
  .main {
    max-width: 960px;
    margin: 0 auto;
    overflow: hidden;
    .main-wrapper {
      margin-top: 5.6rem;
      border-radius: 2px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
  }
}
</style>
