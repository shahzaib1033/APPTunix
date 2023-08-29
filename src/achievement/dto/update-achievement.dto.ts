import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAchievementDto } from './create-achievement.dto';

export class UpdateAchievementDto extends PartialType(CreateAchievementDto) {
  @ApiProperty()
  picture: string;

  @ApiProperty()
  type: string;
  
  @ApiProperty()
  title: string;
    
  @ApiProperty()
  description: string;
}
