import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OurteamService } from './ourteam.service';
import { CreateTeamDto } from './dto/create-ourteam.dto';
import { UpdateTeamDto } from './dto/update-ourteam.dto';

import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/dto/respose.dto';
import { AccessTokenGuard } from 'src/common/guards/AccessToken.guard';


@Controller('ourteam')
@ApiTags('OurTeam')
export class OurteamController {
  constructor(private readonly ourteamService: OurteamService) { }

  @Post()
  // @UseGuards(AccessTokenGuard)
  create(@Body() createOurteamDto: CreateTeamDto) {
    return this.ourteamService.create(createOurteamDto);
  }

  @Get()
  findAll() {
    return this.ourteamService.findAll();
  }
  
  @Get('/count')
  // @UseGuards(AccessTokenGuard)
  async count() {
    try {
      const data = await this.ourteamService.count();
      return new ApiResponse(true, data, 'success', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourteamService.findOne(id);
  }

  @Patch(':id')
  // @UseGuards(AccessTokenGuard)
  update(@Param('id') id: string, @Body() updateOurteamDto: UpdateTeamDto) {
    return this.ourteamService.update(id, updateOurteamDto);
  }

  @Delete(':id')
  // @UseGuards(AccessTokenGuard)
  remove(@Param('id') id: string) {
    return this.ourteamService.remove(id);
  }


}
