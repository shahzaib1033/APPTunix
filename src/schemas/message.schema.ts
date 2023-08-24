import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Messages extends Document {
  @Prop({ required: true })
  userName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;
  @Prop({ required: true, unique: true })
  countryCode: string;

  @Prop({ required: true, type: [String] })
  messages: string[];
}

export const MessageSchema = SchemaFactory.createForClass(Messages);
