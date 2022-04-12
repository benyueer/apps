<template>
  <div id="app">
    <!-- <MonacoEditor class="editor" v-model="code" language="sql" /> -->
    <mymonacoeditor></mymonacoeditor>
  </div>
</template>

<script>
import mymonacoeditor from './components/monaco-editor.jsx'
/// import MonacoEditor from 'vue-monaco'
import Vue from 'vue'
export default {
  name: 'App',
  components: {
    // MonacoEditor,
     mymonacoeditor
  },
  data() {
    return {
      code: 'const noop = () => {}'
    }
  },
  mounted() {
    const vueCom = Vue.extend({
      template: `<div>123</div>`
    })
    console.log(vueCom)

    const nodeCon = new vueCom()
    nodeCon.$mount('#app')
    console.log(nodeCon)
  },
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
}
</script>

<style>
.editor {
  width: 600px;
  height: 800px;
}
</style>
