<template>
  <div id="app">
    <page1 />
    <page2 />
    <page3 />
  </div>
</template>

<script>
  import page1 from './views/page1.vue'
  import page2 from './views/page2.vue'
  import page3 from './views/page3.vue'

  export default {
    name: 'app',
    components: {
      page1,
      page2,
      page3
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
