import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, File } from 'multer';
import { ApiResponse } from '../dto/respose.dto';
import { randomUUID } from 'crypto';
import { ApiTags } from '@nestjs/swagger';

@Controller('upload')
@ApiTags('upload')
export class FileUploadController {
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: (req, file, callback) => {
          const uniqueFilename = `${randomUUID() + '-' + file.originalname.replace(' ', '')
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
  ) {
    try {
      const data = process.env.BASE_URL + '/' + image.path;
      // const data = await this.trustedService.createTrusted(createTrustedDto);
      return new ApiResponse(true, data, 'Added successfully', null);
    } catch (error) {
      console.log(error);
      return new ApiResponse(false, null, 'Error', error.message);
    }
  }
}


