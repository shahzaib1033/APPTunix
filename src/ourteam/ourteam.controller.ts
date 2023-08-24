import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OurteamService } from './ourteam.service';
import { CreateOurteamDto } from './dto/create-ourteam.dto';
import { UpdateOurteamDto } from './dto/update-ourteam.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('ourteam')
  @ApiTags('OurTeam')
export class OurteamController {
  constructor(private readonly ourteamService: OurteamService) {}

  @Post()
  create(@Body() createOurteamDto: CreateOurteamDto) {
    return this.ourteamService.create(createOurteamDto);
  }

  @Get()
  findAll() {
    return this.ourteamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ourteamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOurteamDto: UpdateOurteamDto) {
    return this.ourteamService.update(+id, updateOurteamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ourteamService.remove(+id);
  }
}
