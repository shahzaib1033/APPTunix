import { Module } from '@nestjs/common';
import { IndustriesService } from './industries.service';
import { IndustriesController } from './industries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Industery, industrySchema } from 'src/schemas/industries.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Industery.name, schema: industrySchema },
    ]),],
  controllers: [IndustriesController],
  providers: [IndustriesService],
})
export class IndustriesModule {}
