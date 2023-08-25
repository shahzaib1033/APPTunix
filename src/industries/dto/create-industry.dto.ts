import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class IndustryDto {
  @IsNotEmpty()
  @ApiProperty()
  iconPicture: string;

  @IsNotEmpty()
  @ApiProperty()
  heading: string;

  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @ApiProperty()
  demoPictures: string[];
}
