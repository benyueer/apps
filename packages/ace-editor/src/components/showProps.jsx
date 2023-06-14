export default {
  props: {
    msg: {
      type: Number,
      default: 2
    }
  },
  mounted() {
    console.log(this)
  },
  render() {
    return (
      <div>msg: {this.$props.msg}</div>
    )
  }
}