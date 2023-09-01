import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';




export class TrustedDto {
  @IsNotEmpty()
  @ApiProperty()
  picture: string;

  @IsNotEmpty()
  @ApiProperty()
  name: string;


}
