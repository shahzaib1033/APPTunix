import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { IndustriesService } from './industries.service';
import { IndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { ApiResponse } from 'src/dto/respose.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('industries')
@ApiTags('industries')
export class IndustriesController {
  constructor(private readonly industriesService: IndustriesService) {}

  @Post()
  async create(@Body() IndustryDto: IndustryDto) {
    try {
      const data = await this.industriesService.create(IndustryDto);
      return new ApiResponse(true, data, 'Added Successfully', null);
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }

  @Get()
 async findAll() {
    try {
      const data = await this.industriesService.findAll();
      return new ApiResponse(true, data, 'Added Successfully', null);
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.industriesService.findOne(id);
      return new ApiResponse(true, data, 'Added Successfully', null);
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIndustryDto: UpdateIndustryDto,
  ) {
    try {
      const data = await this.industriesService.update(id, updateIndustryDto);
      return new ApiResponse(true, data, 'Added Successfully', null);
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const data = await this.industriesService.remove(id);
      return new ApiResponse(true, data, 'Added Successfully', null);
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }
}
