import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop({ default: 'admin' })
    role: string;
    
    @Prop()
    refreshToken: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
