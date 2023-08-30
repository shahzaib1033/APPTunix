import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Admin, AdminDocument } from '../schemas/admin.schema'; // Make sure this path is correct
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/payloade.interface';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name) private readonly adminModel: Model<AdminDocument>,
        private readonly jwtService: JwtService,
    ) { }

    async createAdmin(createAdminDto: CreateAdminDto) {
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
        const admin = new this.adminModel({
            ...createAdminDto,
            password: hashedPassword,
        });
        return admin.save();
    }

    async loginAdmin(loginAdminDto: LoginAdminDto) {
        const admin = await this.adminModel.findOne({ username: loginAdminDto.username });

        if (admin && (await bcrypt.compare(loginAdminDto.password, admin.password))) {
            const token = this.generateJwtToken(admin._id);
            return { admin, token };
        } else {
            throw new UnauthorizedException('Invalid credentials');
        }
    }

    private generateJwtToken(admin: JwtPayload): string {
        const payload = { sub: admin.id };
        return this.jwtService.sign(payload);
    }
}
