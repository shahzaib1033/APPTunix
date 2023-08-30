import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Team extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: '' })
  picture: string;

  @Prop({ required: true })
  stack: string;
}

export const TeamDocument = SchemaFactory.createForClass(Team);
export type TeamDocument = Team & Document;