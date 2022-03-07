import { defineComponent, reactive, watch } from "vue";
import { useStore } from "vuex";
import componentWrapper from "./componentWrapper";

export default defineComponent({
  props: ['visible', 'visibleModifiers'],
  emits: ['update:visible'],
  components: {componentWrapper},
  setup(props, {emit}) {
    const state = reactive({
      visible: props.visible,
    })

    const store = useStore()
    watch(
      () => props.visible,
      (val, old) => {
        if (val === old) return
        state.visible = val
      }
    )
    watch(
      () => state.visible,
      () => {
        emit('update:visible', state.visible)
      }
    )
    return () => (
      <a-modal vModel={[state.visible, 'visible']}>
        {
          store.state.componentData.map((comp: any) => <componentWrapper comp={comp}></componentWrapper>)
        }
      </a-modal>
    )
  }
})