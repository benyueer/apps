<template>
  <div id="app">
    <!-- <MonacoEditor class="editor" v-model="code" language="sql" /> -->
    <mymonacoeditor></mymonacoeditor>
  </div>
</template>

<script>
import mymonacoeditor from './components/monaco-editor.jsx'
/// import MonacoEditor from 'vue-monaco'
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
