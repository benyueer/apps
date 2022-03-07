import { App, defineAsyncComponent } from 'vue'

const components = [
  'text', 'button'
]

export default function install (app: App): void {
  components.forEach(component => {
    app.component('comp-'+component, defineAsyncComponent(() => import(`./${component}.tsx`)))
  })
}