import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { TrustedService } from './trusted.service';
import { Trusted } from '../schemas/TrustedBy.schema';
import { TrustedDto } from './dto/trusted.dto';
import { ApiResponse } from 'src/config/dto/respose.dto';
import { randomUUID } from 'crypto';
import { diskStorage, File } from 'multer';
import 'dotenv/config';

@Controller('trusted')
@ApiTags('Trusted')
export class TrustedController {
  constructor(private readonly trustedService: TrustedService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: (req, file, callback) => {
          const uniqueFilename = `${
            randomUUID() + '-' + file.originalname.replace(' ', '')
          }`;
          callback(null, uniqueFilename);
        },
      }),
      limits: {
        fileSize: 1024 * 1024 * 4, // 4MB limit
      },
      fileFilter: (req, file, callback) => {
        if (!file) {
          callback(null, true);
        } else {
          callback(null, true);
        }
      },
    }),
  )
  async createTrusted(
    @UploadedFile() image: File,
    @Body() createTrustedDto: TrustedDto,
  ) {
    try {
      createTrustedDto.picture = process.env.BASE_URL + '/' + image.path;
      const data = await this.trustedService.createTrusted(createTrustedDto);
      return new ApiResponse(true, data, 'Added successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }

  // @ApiConsumes('multipart/form-data')
  // async updateUserProfile(

  //   @Body() body: TrustedDto,
  //   @UploadedFile() image: Express.Multer.File,
  // ) {
  //   try {
  //     if (image) {
  //       body.picture = process.env.BASE_URL + '/' + image.path;
  //     }
  //     const resp = await this.trustedService.createTrusted(body);
  //     return new ApiResponse(true, resp, '', null);
  //   } catch (error) {
  //     console.log(error);
  //     return new ApiResponse(false, null, 'Error', error.message);
  //   }
  // }
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
