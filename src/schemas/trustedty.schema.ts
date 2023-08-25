import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Trusted extends Document {
  @Prop({ required: true })
  picture: string;
}

export const TrustedSchema = SchemaFactory.createForClass(Trusted);
