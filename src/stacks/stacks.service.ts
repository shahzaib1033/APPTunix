import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { Stack } from 'src/schemas/stack.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StacksService {
  constructor(
    @InjectModel(Stack.name)
    private readonly StackModel: Model<Stack>,
  ) {}
 async create(createStackDto: CreateStackDto): Promise<Stack> {
    const createdStack = new this.StackModel(createStackDto);
    return await createdStack.save();
  }

  async findAll(){
return await  this.StackModel.find().exec()
  }

 async findOne(id: string) {
return await this.StackModel.findById({_id:id}).exec();
  }

 async update(id: String, updateStackDto: UpdateStackDto) {
    const to_update= await this.StackModel.findById({ _id: id }).exec();
   const { picture, name } = updateStackDto
   to_update.picture = picture ||to_update.picture
   to_update.name = name || to_update.name
    const updated = await to_update.save()
    return updated;
  }

  async remove(id: string) {
    const result = await this.StackModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Stack record not found');
    } else {
      return result;
    }
  }
}
