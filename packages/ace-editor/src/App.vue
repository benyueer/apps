<template>
  <div id="app">
    <ace></ace>
    hello{{msg}}
    <button @click="() => count++">{{count}}</button>
    <button @click="() => foo++">foo add{{foo}}</button>
  </div>
</template>

<script>
import ace from './components/ace-editor.jsx'
// import Vue from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    ace
  //   HelloWorld
  },
  data() {
    return {
      count: 0,
      foo: 1
    }
  },
  computed: {
    msg() {
      return `You clicked ${this.count} times`
    }
  },
  mounted() {
    // const vueCom = Vue.extend({
    //   template: `<div>123</div>`
    // })
    // console.log(vueCom)
  }
}

</script>

<style>

</style>
