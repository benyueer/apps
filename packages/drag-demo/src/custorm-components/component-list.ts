const STATIC = 'static'
const API = 'api'

export const componentList = [
  {
    component: 'comp-text', // 组件名
    label: '文本', // 显示名称
    icon: 'wenben', // 图标
    style: {  // 样式
      width: 200,
      height: 30,
      top: 200,
      left: 200,
    },
    dataType: STATIC, // 数据类型
    staticData: 'wenben', // 静态数据
    fetchData: { // 获取数据
      url: 'localhost:10086/api/', // 请求地址
      time: 0, // 请求时间
    }
  },
  {
    component: 'comp-button',
    label: '按钮',
    style: {
      width: 200,
      height: 30,
      top: 200,
      left: 200,
    },
    fetchData: {
      url: '',
      time: 0,
    } 
  }
]