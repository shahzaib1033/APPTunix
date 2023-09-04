import { BadGatewayException, Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("ashdjf kljahsdflkjas dhjlfjahslfdjsfaljasdfl")
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      try {
        const decodedToken = jwt.verify(token,process.env.SCRETE);

        if (decodedToken) {
          req.user = decodedToken;
          next();
        }
      } catch (error) {
        throw new UnauthorizedException('Invalid token');
      }
    }
    throw new BadGatewayException('token token not fond ');

    
  }
}
