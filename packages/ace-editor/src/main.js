import Vue from 'vue/dist/vue.esm'
// import App from './App.vue'
import withCompiler from './components/withCompiler'
// import ace from 'ace-builds'

// Vue.config.productionTip = false
// Vue.use(ace)
// Vue.directive('highlight', () => {
//   // eslint-disable-next-line no-debugger
//   debugger
// })

new Vue({
  // render: h => h(App),
  render: h => h(withCompiler),
}).$mount('#app')
