import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class service extends Document {
    @Prop({required:true})
    picture: string
    @Prop({required:true})
    heading: string;
    @Prop()
    description: string;
}

export const serviceSchema = SchemaFactory.createForClass(service);