
function createWebSocket(url, manager) {
  console.log(url, manager)
}

class SocketManager {
  static socket = createWebSocket('url', this)
  static cache = new Map()
  static status = UNCONNECTED

  onconnect = () => {
    SocketManager.status = CONNECTED
  }
  onerror = (msg) => {
    
  }

  send(meta, data, callback) {
    cache.set(meta.uuid, callback)
    SocketManager.socket.send({meta, data})
  }

  onmessage(data) {
    SocketManager.cache.get(data.uuid)?.(data)
  }
}

const socket = {
  install(app) {
    app.prototype.$socketManager = new SocketManager
  }
}

Vue.use(socket)


// components:
this.$socketManager.send(...)