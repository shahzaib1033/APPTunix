import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { ConfigService } from '@nestjs/config';
import { UserModule } from '../user/user.module';

import { UserController } from '../user/user.controller';

@Module({
  imports: [UserModule, JwtModule.register({})],
  controllers: [AuthController, UserController],
  providers: [
    AuthService,
    ConfigService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule { }
