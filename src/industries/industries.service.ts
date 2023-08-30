import { Injectable, NotFoundException } from '@nestjs/common';
import { IndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Industery } from 'src/schemas/industries.schema';
import { Model } from 'mongoose';


@Injectable()
export class IndustriesService {
  constructor(
    @InjectModel(Industery.name)
    private readonly industryModel: Model<Industery>,
  ) { }
  
  async create(createIndustryDto: IndustryDto) {
    const createdindustry = new this.industryModel(createIndustryDto);
      return await createdindustry.save();
  }

  async findAll() {
    return await this.industryModel.find().exec();
  }

 async findOne(id: string) {
return await this.industryModel.findById({_id:id}).exec();
  }

 async update(id: string, updateIndustryDto: UpdateIndustryDto) {
      const to_update = await this.industryModel.findById({ _id: id }).exec();
   const { iconPicture, heading, description, demoPicture } = updateIndustryDto;
      to_update.iconPicture = iconPicture || to_update.iconPicture;
      to_update.heading = heading || to_update.heading;
      to_update.description = description || to_update.description;
      to_update.demoPicture = demoPicture || to_update.demoPicture;
      const updated = await to_update.save();
      return updated;
  }
  async count(): Promise<number> {
    try {
      const count = await this.industryModel.countDocuments().exec();
      return count;
    } catch (error) {
      throw new Error('Error counting documents');
    }
  }

  async remove(id: string) {
  const result = await this.industryModel.deleteOne({ _id: id }).exec();
  if (result.deletedCount === 0) {
    throw new NotFoundException('Stack record not found');
  } else {
    return result;
  }  }
}
