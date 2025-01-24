import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './gateway/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
