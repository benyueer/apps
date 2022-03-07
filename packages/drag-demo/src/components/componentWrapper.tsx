import { defineComponent, h, resolveComponent } from "vue";

export default defineComponent({
  props: ['comp'],
  setup(props) {
    return () => (
      <>
        {
          h(resolveComponent(props.comp.component), {data: props.comp})
        }
      </>
    )
  }
})