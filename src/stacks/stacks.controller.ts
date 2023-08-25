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
import { StacksService } from './stacks.service';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from 'src/dto/respose.dto';

@Controller('stacks')
@ApiTags('Stacks')
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Post()
  async create(@Body() createStackDto: CreateStackDto) {
    try {
      const data = await this.stacksService.create(createStackDto);
      if (data) {
        return new ApiResponse(true, data, 'successfully added', null);
      }
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Get()
 async findAll() {
    try {
      const data = await this.stacksService.findAll();
      return new ApiResponse(true, data, 'success', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
  try {
    const data = await this.stacksService.findOne(id);
    return new ApiResponse(true, data, 'success', null);
  } catch (error) {
    console.log(error);
    return new ApiResponse(false, null, 'Error', error.message);
  }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStackDto: UpdateStackDto) {
    try {
      const data = await this.stacksService.update(id, updateStackDto);
      return new ApiResponse(true, data, 'successfully updated', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
  try {
    const data = await this.stacksService.remove(id);
    return new ApiResponse(true, data, 'successfully deleted', null);
  } catch (error) {
    console.log(error);
    return new ApiResponse(false, null, 'Error', error.message);
  }
  }
}
