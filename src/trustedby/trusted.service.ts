import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trusted } from '../schemas/trustedty.schema';
import { TrustedDto } from './dto/trusted.dto';
import { updateTrustedDto } from './dto/update-trusted';

@Injectable()
export class TrustedService {
  constructor(
    @InjectModel(Trusted.name)
    private readonly trustedModel: Model<Trusted>,
  ) {}

  async createTrusted(TrustedDto: TrustedDto): Promise<Trusted> {
    const createdTrusted = new this.trustedModel(TrustedDto);
    return createdTrusted.save();
  }

  async getAllTrusted(): Promise<Trusted[]> {
    return this.trustedModel.find().exec();
  }

  async getTrustedId(id: string): Promise<Trusted> {
    const trusted = await this.trustedModel.findById({ _id: id }).exec();
    if (!trusted) {
      throw new NotFoundException('Trusted record not found');
    }
    return trusted;
  }

  async updateTrusted(id: string, TrustedDto: updateTrustedDto): Promise<Trusted> {
    const updatedTrusted = await this.trustedModel.findByIdAndUpdate(
      id,
      TrustedDto,
      { new: true },
    );
    if (!updatedTrusted) {
      throw new NotFoundException('Trusted record not found');
    }
    return updatedTrusted;
  }

  async deleteTrusted(id: string) { 
    const result = await this.trustedModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Trusted record not found');
    } else {
      return result;
    }
  }
  async count(): Promise<number> {
    try {
      const count = await this.trustedModel.countDocuments().exec();
      return count;
    } catch (error) {
      throw new Error('Error counting documents');
    }
  }
}
