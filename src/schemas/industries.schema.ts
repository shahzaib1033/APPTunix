
import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export class Industery extends Document {
  @Prop({ required: true, type: String })
  iconPicture: string;

  @Prop({ required: true, type: String })
  heading: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: [String] })
  demoPictures: string[];

}