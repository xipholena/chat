import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository } from 'typeorm';
import { AppService } from 'src/app.service';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, Repository<Message>])
  ],
  providers: [MyGateway, Repository<Message>, AppService, MessagesService],
})
export class GatewayModule {}
