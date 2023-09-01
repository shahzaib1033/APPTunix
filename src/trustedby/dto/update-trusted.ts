import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';




export class updateTrustedDto {
    @Optional()
    @ApiProperty()
    picture: string;

    @Optional()
    @ApiProperty()
    name: string;


}
