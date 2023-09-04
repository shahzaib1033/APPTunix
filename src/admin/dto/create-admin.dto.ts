import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    refreshToken: string;

}
