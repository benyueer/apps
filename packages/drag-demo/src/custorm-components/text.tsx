import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: ['data'],
  setup(props) {
    const state = reactive({
      value: props.data.value,
    })
    console.log(props.data)
    // if (props.data.fetchData.use) {

    // }
    return () => (
      <div>
        <input v-model={state.value} type="text" />
      </div>
    )
  }
})