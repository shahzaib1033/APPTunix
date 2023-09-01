import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Trusted extends Document {
  @Prop({ required: true })
  picture: string;
  @Prop({ required: true })
   name: string;
}

export const TrustedSchema = SchemaFactory.createForClass(Trusted);
