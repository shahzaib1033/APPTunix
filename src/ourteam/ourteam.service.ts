import { Injectable } from '@nestjs/common';
import { CreateOurteamDto } from './dto/create-ourteam.dto';
import { UpdateOurteamDto } from './dto/update-ourteam.dto';

@Injectable()
export class OurteamService {
  create(createOurteamDto: CreateOurteamDto) {
    return 'This action adds a new ourteam';
  }

  findAll() {
    return `This action returns all ourteam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ourteam`;
  }

  update(id: number, updateOurteamDto: UpdateOurteamDto) {
    return `This action updates a #${id} ourteam`;
  }

  remove(id: number) {
    return `This action removes a #${id} ourteam`;
  }
}
