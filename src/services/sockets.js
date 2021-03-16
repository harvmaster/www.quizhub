import io from 'socket.io-client'

let socket
const localIP = 'ws://192.168.56.101:3000'
// const networkIP = 'wss://jeopardyapi.hzuccon.com'
// const port = 3000
// const networkConnection = true

export function addEventListener (event) {
  if (!socket) {
    initialise()
  }
  socket.on(event.type, event.callback)
}

export function sendEvent (event, msg) {
  if (!socket) {
    initialise()
  }
  socket.emit(event, msg)
}

export function initialise () {
  console.log('initialising')
  socket = io(localIP)
}
