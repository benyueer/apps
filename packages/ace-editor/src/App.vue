<template>
  <div id="app">
    <ace></ace>
    hello{{msg}}
    <button @click="() => count++">{{count}}</button>
    <button @click="() => foo++">foo add{{foo}}</button>
    <show-props :msg="foo" />
    <with-compiler />
  </div>
</template>

<script>
import ace from './components/ace-editor.jsx'
// import Vue from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import showProps from './components/showProps.jsx'
import withCompiler from './components/withCompiler'
export default {
  name: 'App',
  components: {
    ace, showProps, withCompiler
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
