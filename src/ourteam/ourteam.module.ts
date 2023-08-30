import { Module } from '@nestjs/common';
import { OurteamService } from './ourteam.service';
import { OurteamController } from './ourteam.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamDocument } from 'src/schemas/ourteam.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Team', schema: TeamDocument }]),
  ],
  controllers: [OurteamController],
  providers: [OurteamService],
})
export class OurteamModule {}
