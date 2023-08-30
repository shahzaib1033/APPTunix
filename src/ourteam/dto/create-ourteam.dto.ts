import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTeamDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    picture: string;

    @IsNotEmpty()
    @IsString()
    stack: string;
}

