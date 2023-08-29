import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Achievement } from '../schemas/achievements.schema';
import { AchievementType } from 'src/enums/achievement-type.enum';

@Injectable()
export class AchievementService {
  constructor(
    @InjectModel(Achievement.name)
    private readonly achievementModel: Model<Achievement>,
  ) { }

  async create(createAchievementDto: CreateAchievementDto): Promise<Achievement> {
    const createdAchievement = new this.achievementModel(createAchievementDto);
    return createdAchievement.save();
  }

  async findAll(): Promise<Achievement[]> {
    return this.achievementModel.find().exec();
  }

  async findOne(id: string): Promise<Achievement> {
    const achievement = await this.achievementModel.findById(id).exec();
    if (!achievement) {
      throw new NotFoundException(`Achievement with ID ${id} not found`);
    }
    return achievement;
  }

  async update(id: string, updateAchievementDto: UpdateAchievementDto): Promise<Achievement> {
    const achievement = await this.achievementModel.findOne({ _id: id });

    const { title, description ,picture,type} = updateAchievementDto;

    achievement.title = title || achievement.title;
    achievement.picture = picture || achievement.picture;
    achievement.description = description || achievement.description;
    if (type) {
      if (type in AchievementType) {
        achievement.type = type as AchievementType;
      } else {
        throw new BadRequestException('Invalid achievement type');
      }
    }

    return await achievement.save();
  }

  async remove(id: string) {
    const result = await this.achievementModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Stack record not found');
    } else {
      return result;
    }
  }
}

