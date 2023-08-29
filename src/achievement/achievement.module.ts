import { Module } from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { AchievementController } from './achievement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Achievement, AchievmentSchema } from 'src/schemas/achievements.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Achievement.name, schema: AchievmentSchema },
    ]),],
  controllers: [AchievementController],
  providers: [AchievementService],
})
export class AchievementModule {}
