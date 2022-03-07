import { defineCustomElement } from "vue";

export const CusHelloWorld = defineCustomElement({
  props: {
    opts: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    console.log(this.$props)
  },
  render() {
    return <div 
      id={this.$props.opts.id}
      class={{'login-base-node': true, }}

    >
      {this.$props.opts.options.circleType === 'border' && <div class="text-box2 line-height">
          <span>{this.$props.opts.options.label}</span>
          {this.$props.opts.options.label2 && <span>{this.$props.opts.options.label2}</span>}
          <button onClick={() => console.log(this.$props.opts)}>+</button>
        </div>}
    </div>
  },
  styles: [`
  .login-base-node {
    position: absolute;
    height: 82px;
    width: 82px;
    text-align: center;
    border-radius: 4px;
    padding: 15px 0;
    line-height: 28px;
  }
  .icon-box {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    width: 24px;
    border-radius: 12px;
    position: relative;
    background: #eee;
    left: 2px;
  }
  .iconfont {
    color: #666;
  }
  .text-box {
    display: block;
    height: 20px;
    font-size: 12px;
  }
  .account {
    position: absolute;
    font-size: 12px;
    width: 50px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    cursor: pointer;
    background: #eee;
    border-radius: 4px;
    box-shadow: #eee;
    border: 1px;
    color: #666;
  }
  .account:hover {
    background: #eee;
    color: #666;
  }
  .circle-border {
    background: #eee;
    border: 1px;
    box-shadow: #eee;
    font-size: 12px;
    color: #666;
    text-align: center;
  }
  .text-box2 {
    width: 100%;
    height: 100%;
    line-height: 52px;
  }
  .test-box2 span {
    display: block;
    height: 20px;
  }
  .line-height {
    line-height: 30px;
  }
  `]
})

customElements.define('cus-hello-world', CusHelloWorld);

