import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <div id="app">
        <span>app</span>
        <router-view></router-view>
      </div>
    )
  }

})
