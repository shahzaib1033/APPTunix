import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,  
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { TrustedService } from './trusted.service';
import { TrustedDto } from './dto/trusted.dto';
import { ApiResponse } from 'src/dto/respose.dto';
import 'dotenv/config';

@Controller('trusted')
@ApiTags('Trusted')
export class TrustedController {
  constructor(private readonly trustedService: TrustedService) {}

  @Post()
  async createTrusted(
    @Body() createTrustedDto: TrustedDto,
  ) {
    try {
      const data = await this.trustedService.createTrusted(createTrustedDto);
      return new ApiResponse(true, data, 'Added successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  
  @Get()
  async getAllTrusted() {
    try {
      const data = await this.trustedService.getAllTrusted();
      return new ApiResponse(true, data, 'success', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Get(':id')
  async getTrustedId(@Param('id') id: string) {
    try {
      const data = await this.trustedService.getTrustedId(id);
      return new ApiResponse(true, data, 'success', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Put(':id')
  async updateTrusted(
    @Param('id') id: string,
    @Body() createTrustedDto: TrustedDto,
  ) {
    try {
      const data = await this.trustedService.updateTrusted(
        id,
        createTrustedDto,
      );
      return new ApiResponse(true, data, 'updated successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  @Delete(':id')
  async deleteTrusted(@Param('id') id: string) {
    try {
      const data = this.trustedService.deleteTrusted(id);
      if (data) {
        return new ApiResponse(true, data, 'deleted successfully', null);
      } else {
        return new ApiResponse(false, null, 'Error', 'server side error');
      }
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }
}
