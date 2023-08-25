import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Messages } from '../schemas/Message.schema';
import { ApiResponse } from 'src/dto/respose.dto';
import { CreateMessageDto } from './dto/messges.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('messages')
@ApiTags('massage')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async getAllMessages(): Promise<ApiResponse<Messages[]>> {
    return this.messagesService.getAllMessages();
  }

  @Post()
  async createMessage(@Body() messageData: CreateMessageDto) {
    return await this.messagesService.createMessage(messageData);
  }
}
