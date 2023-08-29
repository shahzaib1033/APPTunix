import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevelopmentsService } from './developments.service';
import { CreateDevelopmentDto } from './dto/create-development.dto';
import { UpdateDevelopmentDto } from './dto/update-development.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/dto/respose.dto';

@Controller('developments')
@ApiTags('developments')
export class DevelopmentsController {
  constructor(private readonly developmentsService: DevelopmentsService) { }

  @Post()
  async create(@Body() createDevelopmentDto: CreateDevelopmentDto) {
    try {
      const data = await this.developmentsService.create(createDevelopmentDto);
      if (data) {
        return new ApiResponse(true, data, 'added Successfully', null);
      } else {
        return new ApiResponse(
          false,
          null,
          'something went wrong in adding ',
          null,
        );
      }
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);
    }
  }

  @Get()
 async findAll() {
    try{
      const data = await this.developmentsService.findAll();
      if (data) {
        return new ApiResponse(true, data, 'added Successfully', null);
      } else {
        return new ApiResponse(
          false,
          null,
          'something went wrong in adding ',
          null,
        );
      }
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);
    }
  }

  @Get(':id')
   async findOne(@Param('id') id: string) {
   try{
    const data = await this.developmentsService.findOne(id);
    if (data) {
      return new ApiResponse(true, data, 'Success', null);
    } else {
      return new ApiResponse(
        false,
        null,
        'something went wrong in adding ',
        null,
      );
    }
  } catch(error) {
    return new ApiResponse(false, null, 'error', error.message);
  }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevelopmentDto: UpdateDevelopmentDto) {
    try{
      const data = this.developmentsService.update(id, updateDevelopmentDto);
      if (data) {
        return new ApiResponse(true, data, 'added Successfully', null);
      } else {
        return new ApiResponse(
          false,
          null,
          'something went wrong in adding ',
          null,
        );
      }
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try{
      const data = this.developmentsService.remove(id);
      if (data) {
        return new ApiResponse(true, data, 'added Successfully', null);
      } else {
        return new ApiResponse(
          false,
          null,
          'something went wrong in adding ',
          null,
        );
      }
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);
    }
  }
}
