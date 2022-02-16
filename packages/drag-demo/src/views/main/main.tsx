import { defineComponent } from "vue";
import styles from './main.module.scss'
import componentList from "@/components/componentList";

export default defineComponent({
  components: {componentList},
  setup() {
    
    return () => (
      <div class={styles.main}>
        <div class={styles.leftBox}>
          {/* <componentList></componentList> */}
          <comptext></comptext>
        </div>
        <div class={styles.mainBox}></div>
        <div class={styles.rightBox}></div>
      </div>
    )
  }
})