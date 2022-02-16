import { defineAsyncComponent, defineComponent, h, onMounted, reactive, resolveComponent } from "vue"
import styles from './styles.module.scss'

export default defineComponent({
  components: {
    btn: defineAsyncComponent(() => import('../../components/btn'))
  },
  setup() {

    const components = [
      'btn'
    ]

    const state = reactive<{components: string[]}>({
      components: [],
    })

    const dragstartHandler = (e: DragEvent) => {
      console.log('dragstart', e)
      e.dataTransfer?.setData('index', '0')
    }
    const dragendHandler = (e: DragEvent) => {
      console.log('dragend', e)
    }

    const dragenterHandler = (e: DragEvent) => {
      e.preventDefault()
      console.log('dragenter', e)
    }

    const dragoverHandler = (e: DragEvent) => {
      e.preventDefault()
    }

    const dropHandler = (e: DragEvent) => {
      const index = e.dataTransfer?.getData('index')
      console.log('drop', e, index)
      if (index) {
        state.components.push(components[index as unknown as number])
      }
    }

    return () => (
      <div class={styles.content}>
        <div class={styles.leftBox}>
          <div
            class={styles.btn}
            draggable
            onDragstart={dragstartHandler}
            onDragend={dragendHandler}
          >按钮</div>
        </div>
        <div
          onDragenter={dragenterHandler}
          onDragover={dragoverHandler}
          onDrop={dropHandler}
          class={styles.rightBox}
        >
          {state.components.map((comp: string) => h(resolveComponent(comp)))}
        </div>
      </div>
    )
  }
})