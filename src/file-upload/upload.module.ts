import { Module } from '@nestjs/common';
import { FileUploadController } from './upload';

@Module({

  controllers: [FileUploadController],
  providers: [],
})
export class UploadedFile {}
