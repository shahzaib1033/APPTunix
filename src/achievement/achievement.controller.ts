import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { ApiResponse } from 'src/dto/respose.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('achievement')
@ApiTags('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
 async create(@Body() createAchievementDto: CreateAchievementDto) {
    try {
      const data = await this.achievementService.create(createAchievementDto);
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
    try {
      const data = await this.achievementService.findAll();
      if (data.length > 0) {
        return new ApiResponse(true, data, 'Success', null);
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
    try {
      const data =await this.achievementService.findOne(id);
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
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }

  @Patch(':id')
 async update(
    @Param('id') id: string,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    try {
      const data = await this.achievementService.update(id, updateAchievementDto);
      if (data) {
        return new ApiResponse(true, data, 'Success', null);
      } else {
        return new ApiResponse(
          false,
          null,
          'something went wrong in updating ',
          null,
        );
      }
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    try {
      const data = await this.achievementService.remove(id);
      return new ApiResponse(true, data, 'Added Successfully', null);
    } catch (error) {
      return new ApiResponse(false, null, 'error', error);

    }
  }
}
