import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDevelopmentDto {

    @IsNotEmpty()
    @ApiProperty()
    demoPicture: string;

    @IsNotEmpty()
    @ApiProperty()
    logoPicture: string;

    @IsNotEmpty()
    @ApiProperty()
    region: {
        flag: string;
        country: string;
    };

    @IsNotEmpty()
    @ApiProperty()
    availableOn: {
        link: string;
        pictureToShowOn: string;
    }[];

    @IsNotEmpty()
    @ApiProperty()
    heading: string;

    @IsNotEmpty()
    @ApiProperty()
    downloads: string;

    @IsNotEmpty()
    @ApiProperty()
    description: string;
}
