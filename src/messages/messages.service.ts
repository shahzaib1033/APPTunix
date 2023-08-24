import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Messages } from '../schemas/Message.schema';
import { ApiResponse } from 'src/config/dto/respose.dto';
import { BadRequestException } from '@nestjs/common/exceptions';
import { CreateMessageDto } from './dto/messges.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Messages.name) private readonly messagesModel: Model<Messages>,
  ) {}

  async getAllMessages(): Promise<ApiResponse<Messages[]>> {
    try {
      const messages = await this.messagesModel.find().exec();
      return new ApiResponse(true, messages, 'Messages retrieved successfully');
    } catch (error) {
      return new ApiResponse(
        false,
        null,
        'Failed to retrieve messages',
        error.message,
      );
    }
  }
  async createMessage(
    createMessageDto: CreateMessageDto,
  ): Promise<ApiResponse<Messages>> {
    try {
      const { email, phoneNumber, messages } = createMessageDto;

      let existingMessage = await this.messagesModel
        .findOne({ email, phoneNumber })
        .exec();

      if (!existingMessage) {
        const newMessage = new this.messagesModel(createMessageDto);
        const savedMessage = await newMessage.save();
        return new ApiResponse(
          true,
          savedMessage,
          'Successfully created',
          null,
        );
      }

      existingMessage.messages.push(messages[0]);

      try {
        const updatedMessage = await existingMessage.save();
        return new ApiResponse(
          true,
          updatedMessage,
          'Successfully updated',
          null,
        );
      } catch (error) {
        throw new BadRequestException('Failed to update message.');
      }
    } catch (error) {
      return new ApiResponse(
        false,
        null,
        'Failed to create or update message',
        error.message,
      );
    }
  }
}
