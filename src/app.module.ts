import { Module } from '@nestjs/common';

import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { TrustedModule } from './trustedby/trusted.module';
import { StacksModule } from './stacks/stacks.module';
import { OurteamModule } from './ourteam/ourteam.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    MessagesModule,
    TrustedModule,
    StacksModule,
    OurteamModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
