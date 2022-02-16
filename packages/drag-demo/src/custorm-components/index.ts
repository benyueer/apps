import { App, defineAsyncComponent } from 'vue'

const components = [
  'text'
]

export default function install (app: App): void {
  components.forEach(component => {
    app.component('Comp'+component, defineAsyncComponent(() => import(`./${component}.tsx`)))
  })
}