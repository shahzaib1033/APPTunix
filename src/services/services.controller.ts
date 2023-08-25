import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/dto/respose.dto';

@Controller('services')
@ApiTags('services')

export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
 async create(@Body() createServiceDto: ServiceDto) {
try{
    const data = await this.servicesService.create(createServiceDto);
         return new ApiResponse(true, data, 'Added successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }
  

  @Get()
 async findAll() {
    try {
    const data = await this.servicesService.findAll();
       return new ApiResponse(true, data, 'success', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.servicesService.findOne(id);
       return new ApiResponse(true, data, 'successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Put(':id')
   async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    try {
      const data = await this.servicesService.update(id, updateServiceDto);
         return new ApiResponse(true, data, 'updated successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }
  

  @Delete(':id')
 async remove(@Param('id') id: string) {
    try {
      const data = await this.servicesService.remove(id); 
           return new ApiResponse(true, data, 'deleted successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }
  }

