import { Injectable } from '@nestjs/common';
import { CreateDevelopmentDto } from './dto/create-development.dto';
import { UpdateDevelopmentDto } from './dto/update-development.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Developments } from 'src/schemas/Development.schema';
import { Model } from 'mongoose';


@Injectable()
export class DevelopmentsService {
  constructor(
    @InjectModel(Developments.name)
    private readonly developmentModel: Model<Developments>,
  ) { }
   async create(createDevelopmentDto: CreateDevelopmentDto) {

    const createDevelopment = new this.developmentModel(createDevelopmentDto)
   return await createDevelopment.save()
     
  }

  async findAll() {
  return await this.developmentModel.find()
      }

 async findOne(id: string) {
    return await this.developmentModel.findById({_id:id});
  }

   async update(id: string, updateDevelopmentDto: UpdateDevelopmentDto) {
    const { demoPicture, description, heading, logoPicture, region, downloads, availableOn } = updateDevelopmentDto
const toUpdate = await this.developmentModel.findOne({_id:id})

    toUpdate.demoPicture = demoPicture || toUpdate.demoPicture;
    toUpdate.description = description || toUpdate.description;
    toUpdate.heading = heading || toUpdate.heading;
    toUpdate.logoPicture = logoPicture || toUpdate.logoPicture;
    toUpdate.region = region || toUpdate.region;
    toUpdate.downloads = downloads || toUpdate.downloads;
    toUpdate.availableOn = availableOn || toUpdate.availableOn;

     return toUpdate.save();
  }

  remove(id: string) {
    return this.developmentModel.findByIdAndDelete(id);
  }
  async count(): Promise<number> {
    try {
      const count = await this.developmentModel.countDocuments().exec();
      return count;
    } catch (error) {
      throw new Error('Error counting documents');
    }
  }
}
