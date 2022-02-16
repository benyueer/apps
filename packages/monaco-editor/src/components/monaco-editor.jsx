import * as monaco from 'monaco-editor'
import './monaco-editor.css'

export default {
  data() {
    return {
      box: null
    }
  },

  mounted() {
    console.log(this.$refs)
    this.editor = monaco.editor.create(this.$refs.editor, {
      theme: 'vs',
      language: 'sql',
      value: ''
    });
  },
  render() {
    return (
      <div ref="editor" class="box"></div>
    )
  }
}