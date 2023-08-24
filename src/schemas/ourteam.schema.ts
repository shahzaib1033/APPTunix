import { Prop, Schema } from '@nestjs/mongoose';
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
