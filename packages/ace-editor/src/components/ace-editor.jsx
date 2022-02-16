// import ace from 'ace-builds'
// import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
// import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
// import 'ace-builds/src-noconflict/mode-sql' // 默认设置的语言模式

// import 'ace-builds/src-noconflict/snippets/sql'

// import 'ace-builds/src-noconflict/snippets/javascript'




export default {
  data() {
    return {
      editor: null,
      themePath: 'ace/theme/monokai', // 不导入 webpack-resolver，该模块路径会报错
      modePath: 'ace/mode/sql' // 同上
    }
  },
  mounted() {
    function a() {
      console.log(this)
    }

    const s = a.bind({a: 1111})
    s()

    const t = {}
    t.a1 = this.test

    const fun = t.a1.bind({a: 111})
    fun()
    // this.editor = ace.edit(this.$el, {
    //   maxLines: 20, // 最大行数，超过会自动出现滚动条
    //   minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
    //   fontSize: 14, // 编辑器内字体大小
    //   theme: this.themePath, // 默认设置的主题
    //   mode: this.modePath, // 默认设置的语言模式
    //   tabSize: 4 // 制表符设置为 4 个空格大小

    // })


    // this.editor.setOptions({
    //   enableSnippets: true,
    //   enableLiveAutocompletion: true,
    //   enableBasicAutocompletion: true
    // })
  },

  methods: {
    test() {
      console.log(this)
      // eslint-disable-next-line no-debugger
      debugger
      const a = 100
      this.a = 123
      const fun = () => {
        // eslint-disable-next-line no-debugger
        debugger
        console.log(this)
        console.log(a)
      }
      fun()
    },
  },
  
 
  render() {
    return (
      <div >qwe</div>
    )
  }
}