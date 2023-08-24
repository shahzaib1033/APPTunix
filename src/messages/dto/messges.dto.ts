import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  countryCode: string;

  @IsNotEmpty()
  @ApiProperty()
  messages: string[];
}
