import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Developments extends Document {
    @Prop({ required: true, type: String })
    demoPicture: string;

    @Prop({ required: true, type: String })
    logoPicture: string;

    @Prop({ required: true, type: Object })
    region: {
        flag: string;
        country: string;
    };

    @Prop([
        {
            link: String,
            pictureToShowOn: String,
        },
    ])
    availableOn: {
        link: string;
        pictureToShowOn: string;
    }[];

    @Prop({ required: true, type: String })
    heading: string;

    @Prop({ required: true, type: String })
    downloads: string;

    @Prop({ required: true, type: String })
    description: string;
}

export const DevelopmentsSchema = SchemaFactory.createForClass(Developments);
