import { PartialType } from '@nestjs/mapped-types';
import { ServiceDto } from './create-service.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateServiceDto extends PartialType(ServiceDto) {
  
  @ApiProperty()
  picture: string;

  @ApiProperty()
  heading: string;

  @ApiProperty()
  description: string;
}
