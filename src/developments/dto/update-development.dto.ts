import { PartialType } from '@nestjs/mapped-types';
import { CreateDevelopmentDto } from './create-development.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDevelopmentDto extends PartialType(CreateDevelopmentDto) {
    @ApiProperty()
    demoPicture: string;

    @ApiProperty()
    logoPicture: string;

    @ApiProperty()
    region: {
        flag: string;
        country: string;
    };

    @ApiProperty()
    availableOn: {
        link: string;
        pictureToShowOn: string;
    }[];

    @ApiProperty()
    heading: string;

    @ApiProperty()
    downloads: string;

    @ApiProperty()
    description: string;
}
