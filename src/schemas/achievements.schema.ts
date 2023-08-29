import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AchievementType } from '../enums/achievement-type.enum'; // Import the enum




@Schema()
export class Achievement {
    @Prop({required:true,type:String})
    picture: string
    
    @Prop({required:true,type:String})
    title: string
    
    @Prop({required:true,type:String})
    description:string

    @Prop({ required: true, enum: AchievementType, default: AchievementType.Award })
    type: AchievementType;
}


export const AchievmentSchema = SchemaFactory.createForClass(Achievement)