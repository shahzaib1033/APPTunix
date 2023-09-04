import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminSchema } from '../schemas/admin.schema';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
    JwtModule.register({
      secret: process.env.SECRET,
      // signOptions: { expiresIn: '1h' },
    }),
    
  ],
  controllers: [AdminController],
  providers: [AdminService, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [AdminService],

})
export class AdminModule { }
