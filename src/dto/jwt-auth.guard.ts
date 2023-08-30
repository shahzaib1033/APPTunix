import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
    //   try {
    //     const decodedToken = jwt.verify(token, 'your_secret_key_here'); // Replace with your secret key

    //     if (decodedToken) {
    //       req.user = decodedToken; // Set req.user with decoded JWT payload
    //     }
    //   } catch (error) {
    //     throw new UnauthorizedException('Invalid token');
    //   }
    }

    next();
  }
}
