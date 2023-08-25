import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrustedController } from './trusted.controller';
import { TrustedService } from './trusted.service';
import { Trusted, TrustedSchema } from '../schemas/trustedty.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trusted.name, schema: TrustedSchema }]),
  ],
  controllers: [TrustedController],
  providers: [TrustedService],
})
export class TrustedModule {}
