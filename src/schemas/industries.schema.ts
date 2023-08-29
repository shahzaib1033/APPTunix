import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Industery {
  @Prop({ required: true, type: String })
  iconPicture: string;

  @Prop({ required: true, type: String })
  heading: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: String })
  demoPicture: string;
}
export const industrySchema = SchemaFactory.createForClass(Industery);
