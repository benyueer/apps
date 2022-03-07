import { defineComponent, h, reactive, resolveComponent } from "vue";
import styles from './main.module.scss'
import componentList from "@/components/componentList";
import { useStore } from "vuex";
import { componentList as compList } from "@/custorm-components/component-list";
import preview from "@/components/preview";
import shape from "@/components/shape";

export default defineComponent({
  components: {componentList, preview, shape},
  setup() {

    const store = useStore()

    const state = reactive({
      visible: false,
    })

    const dropHandler = (e: DragEvent) => {
      console.log(213)
      const index = e.dataTransfer?.getData('index')
      store.commit('addComponent', compList[index as unknown as number])
    }

    const dragoverHandler = (e: DragEvent) => {
      e.preventDefault()
    }
    
    return () => (
      <div class={styles.main}>
        <div class={styles.leftBox}>
          <a-button onClick={() => {state.visible = true}}>preview</a-button>
          {state.visible.toString()}
          <componentList></componentList>
        </div>
        <div onDrop={dropHandler} onDragover={dragoverHandler} class={styles.mainBox}>
          {
            store.state.componentData.map((comp: any) => <shape comp={comp}></shape>)
          }
        </div>
        <div class={styles.rightBox}></div>
        <preview vModel={[state.visible, 'visible', ['modifier', 'a']]}></preview>
      </div>
    )
  }
})