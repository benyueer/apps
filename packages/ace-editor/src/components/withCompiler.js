import showProps from "./showProps"
export default {
  components: {Comp: showProps},
  template: `
    <div>
    <div v-if="isShow === 2"></div>
    <span v-if="isShow === 1"></span>
    <Comp />
    </div>
  `,
  data() {
    return {
      isShow: 1
    }
  },
  
  mounted() {
    console.log('with-compiler', this)
  }
}
