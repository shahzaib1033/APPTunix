import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStackDto {
  @IsNotEmpty()
  @ApiProperty()
  picture: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
