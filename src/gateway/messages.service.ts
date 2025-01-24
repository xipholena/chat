import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./message.entity";
import { Repository } from "typeorm";
import { MessageBody, SubscribeMessage } from "@nestjs/websockets";

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
  ) {}
  async createMessage(body) {
    return await this.messagesRepository.save(body)
  }

  async findAllMessages() {
    return await this.messagesRepository.find();
  }
}   