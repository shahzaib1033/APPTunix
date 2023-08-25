import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class ServiceDto {
  @IsNotEmpty()
  @ApiProperty()
  picture: string;
    
  @IsNotEmpty()
  @ApiProperty()
  heading: string;
    
  @IsNotEmpty()
  @ApiProperty()
  description: string;
}
