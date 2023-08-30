import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OurteamService } from './ourteam.service';
import { CreateTeamDto } from './dto/create-ourteam.dto';
import { UpdateTeamDto } from './dto/update-ourteam.dto';
import { JwtMiddleware } from '../dto/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse } from 'src/dto/respose.dto';

@Controller('ourteam')
@ApiTags('OurTeam')
export class OurteamController {
  constructor(private readonly ourteamService: OurteamService) { }

  @Post()
  // @UseGuards(JwtMiddleware)
  create(@Body() createOurteamDto: CreateTeamDto) {
    return this.ourteamService.create(createOurteamDto);
  }

  @Get()
  findAll() {
    return this.ourteamService.findAll();
  }

  @Get('/count')
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
  // @UseGuards(JwtMiddleware)
  update(@Param('id') id: string, @Body() updateOurteamDto: UpdateTeamDto) {
    return this.ourteamService.update(id, updateOurteamDto);
  }

  @Delete(':id')
  @UseGuards(JwtMiddleware)
  remove(@Param('id') id: string) {
    return this.ourteamService.remove(id);
  }


}
