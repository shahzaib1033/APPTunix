import { Module } from '@nestjs/common';
import { DevelopmentsService } from './developments.service';
import { DevelopmentsController } from './developments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Developments, DevelopmentsSchema } from 'src/schemas/Development.schema';


@Module({
  imports:[
  MongooseModule.forFeature([
    { name: Developments.name, schema: DevelopmentsSchema },
  ]),],
  controllers: [DevelopmentsController],
  providers: [DevelopmentsService],
})
export class DevelopmentsModule {}
