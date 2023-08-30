import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateTeamDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    picture: string;

    @IsOptional()
    @IsString()
    stack: string;
}
