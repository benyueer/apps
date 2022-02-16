import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      value: ''
    })
    return () => (
      <div>
        {state.value}
        <input v-model={state.value} type="text" />
      </div>
    )
  }
})