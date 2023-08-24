import { PartialType } from '@nestjs/mapped-types';
import { CreateOurteamDto } from './create-ourteam.dto';

export class UpdateOurteamDto extends PartialType(CreateOurteamDto) {}
