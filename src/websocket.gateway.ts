import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server
  handleConnection() {
    this.server.emit('userCount', this.server.engine.clientsCount)
  }
  handleDisconnect() {
    this.server.emit('userCount', this.server.engine.clientsCount)
  }
}
