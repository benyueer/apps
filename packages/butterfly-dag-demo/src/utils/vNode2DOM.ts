export default function getRealNode(vnode: any) {
  // 创建节点
  const { props, type, children } = vnode
  let _node = null
  // 判断当前节点是文本节点还是标签节点
    _node = document.createElement(type) //创建节点
    for (const key in props) {
      // 设置节点属性
      _node.setAttribute(key, props[key])
    }
    // 追加子节点
    // for (let i = 0; i < children.length; i++) {
      // 设置节点属性
      _node.innerHTML = children[0]
    // }

  return _node
}
