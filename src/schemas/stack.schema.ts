import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Stack extends Document {
  @Prop({ required: true })
  @ApiProperty()
  picture: string;

  @Prop({ required: true })
  @ApiProperty()
  name: string;
}

export const StackSchema = SchemaFactory.createForClass(Stack);
