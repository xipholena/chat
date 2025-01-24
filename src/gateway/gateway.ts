import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io'
import { OnModuleInit,UseGuards} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { WsThrottlerGuard } from './ws-throttler.guard';

@WebSocketGateway(
  {
    cors: {
       origin: 'http://localhost:3001',
       methods: ["GET", "POST"],
    },
  }
)
export class MyGateway implements OnModuleInit {
    constructor(private messageService: MessagesService) {}

  @WebSocketServer()
  server: Server

  onModuleInit(): void {
    this.server.on('connection', (socket) => {
      console.log('socket id:', socket.id);
      console.log('Connected');
    })
  }

  @UseGuards(WsThrottlerGuard)
  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() body: unknown): Promise<void> {
    await this.messageService.createMessage(body);
    this.server.emit('onMessage', {
      msg:'New message',
      content: body
    })
  }

}
