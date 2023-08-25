import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { service } from 'src/schemas/services.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(service.name)
    private readonly serviceModel: Model<service>,
  ) {}

async  create(createServiceDto: ServiceDto) {
  const service = new this.serviceModel(createServiceDto)

  return await service.save()

  }

 async findAll() {
    return await this.serviceModel.find();
  }

 async findOne(id: string) {
    return await this.serviceModel.findById({_id:id});
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
  const to_update = await this.serviceModel.findById({ _id: id }).exec();
  const { picture, heading,description } = updateServiceDto;
  to_update.picture = picture || to_update.picture;
  to_update.heading = heading || to_update.heading;
  to_update.description = description || to_update.description;
  const updated = await to_update.save();
  return updated;  }

 async remove(id: string) {
  const result = await this.serviceModel.deleteOne({ _id: id }).exec();
  if (result.deletedCount === 0) {
    throw new NotFoundException('Stack record not found');
  } else {
    return result;
  }  }
}
