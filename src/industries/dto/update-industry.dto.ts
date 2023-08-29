import { PartialType } from '@nestjs/mapped-types';
import { IndustryDto } from './create-industry.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateIndustryDto extends PartialType(IndustryDto) {
  @ApiProperty()
  iconPicture: string;

  @ApiProperty()
  heading: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  demoPicture: string;
}
