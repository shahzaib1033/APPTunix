import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { StacksService } from './stacks.service';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { ApiTags } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, File } from 'multer';


@Controller('stacks')
@ApiTags('Stacks')
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

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
  create(@Body() createStackDto: CreateStackDto) {
    return this.stacksService.create(createStackDto);
  }

  @Get()
  findAll() {
    return this.stacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stacksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStackDto: UpdateStackDto) {
    return this.stacksService.update(+id, updateStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stacksService.remove(+id);
  }
}
