import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from '../schemas/ourteam.schema';
import { CreateTeamDto } from './dto/create-ourteam.dto';

@Injectable()
export class OurteamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>,
  ) { }

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async findOne(id: string): Promise<Team> {
    return this.teamModel.findById(id).exec();
  }

  async update(id: string, updateTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Team> {
    return this.teamModel.findByIdAndRemove(id).exec();
  }
  async count(): Promise<number> {
    return this.teamModel.countDocuments().exec();
  }
}
