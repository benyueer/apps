import { defineComponent } from "vue";
import {componentList} from '../custorm-components/component-list'
import styles from './styles/componentList.module.scss'

export default defineComponent({
  setup() {

    const dragstartHandler = (e: DragEvent, index: number) => {
      e.dataTransfer?.setData('index', index.toString())
    }

    return () => (
      componentList.map((component: any, index: number) =>
        <div onDragstart={(e) => dragstartHandler(e, index)} class={styles.compDiv} draggable>{component.label}</div>
      ))
  }
})