import { Module } from '@nestjs/common';

import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { TrustedModule } from './trustedby/trusted.module';
import { StacksModule } from './stacks/stacks.module';
import { OurteamModule } from './ourteam/ourteam.module';
import { UploadedFile } from './file-upload/upload.module';
import { ServicesModule } from './services/services.module';
import { IndustriesModule } from './industries/industries.module';
import { AchievementModule } from './achievement/achievement.module';
import { DevelopmentsModule } from './developments/developments.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MessagesModule,
    TrustedModule,
    StacksModule,
    OurteamModule,
    UploadedFile,
    ServicesModule,
    IndustriesModule,
    AchievementModule,
    DevelopmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
