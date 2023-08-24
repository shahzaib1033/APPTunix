import { Module } from '@nestjs/common';
import { OurteamService } from './ourteam.service';
import { OurteamController } from './ourteam.controller';

@Module({
  controllers: [OurteamController],
  providers: [OurteamService],
})
export class OurteamModule {}
