import { defineComponent, onMounted, ref } from "vue";
import { Canvas } from 'butterfly-dag';
import mockData from './data';
import Node from './node';
import './utils/defineElement';


export default defineComponent({
  setup() {

    const rootDom = ref()

    let canvas: any = null
    onMounted(() => {
      console.log(rootDom.value)
       canvas = new Canvas({
        root: rootDom.value,              //canvas的根节点(必传)
        disLinkable: true, // 可删除连线
        linkable: true,    // 可连线
        zoomable: true,         //可缩放(可传)
        moveable: true,         //可平移(可传)
        draggable: true,        //节点可拖动(可传)
        theme: {
          edge: {
            type: 'AdvancedBezier',
            arrow: true,
            shapeType: 'AdvancedBezier'
          }
        },
        layout: {
          type: 'compactBox',
          options: {
            direction: 'LR',
            getHeight() {
              return 60;
            },
            getWidth() {
              // console.log(d);
              // console.log(this);

              return 180;
            },
            getHGap() {
              return 60;
            },
            getVGap() {
              return 20;
            },
          }
        }
      });
      canvas.draw(mockData, () => {
        canvas.setGridMode(true, {
          isAdsorb: false,         // 是否自动吸附,默认关闭
          theme: {
            shapeType: 'circle',     // 展示的类型，支持line & circle
            gap: 20,               // 网格间隙
            background: '#f3f4f7',     // 网格背景颜色
            circleRadiu: 1.5,        // 圆点半径
            circleColor: '#bdbdbe'    // 圆点颜色
          }
        })
        canvas.setMinimap(true, {})
      })
    })

    const getDataMap = () => {
      const data:any = null
      
      console.log(canvas.getDataMap(data))
    }

    const addNode = () => {
      canvas.addNode({
        id: '10000',
        label: '扫码111',
        className: 'circle-border',
        iconType: 'icon-rds',
        circleType: 'border',
        top: 400,
        left: 50,
        Class: Node,
        endpoints: [{
          id: 'right',
          orientation: [1, 0],
          pos: [0, 0.5]
        }]
      },)
    }


      return () => {
        return <div>App
          <button onClick={getDataMap}>getDataMap</button>
          <button onClick={addNode}>addNode</button>
          <div ref={rootDom} style={{ width: '1000px', height: '1000px' }}></div>
        </div>;
      }
    }
})