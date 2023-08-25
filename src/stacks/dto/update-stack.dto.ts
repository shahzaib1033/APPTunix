import { PartialType } from '@nestjs/mapped-types';
import { CreateStackDto } from './create-stack.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStackDto extends PartialType(CreateStackDto) {
  @ApiProperty()
  picture: string;

  @ApiProperty()
  name: string;
}
