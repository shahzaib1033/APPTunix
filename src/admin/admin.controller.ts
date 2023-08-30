import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginAdminDto } from './dto/login-admin.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('admin')
@ApiTags('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }
  
  

  @Post('/login')
  async login(@Body() loginAdminDto: LoginAdminDto) {
    const adminLoginResponse = await this.adminService.loginAdmin(loginAdminDto);
    return { message: 'Admin logged in successfully', ...adminLoginResponse };
  }

  @Post('/signup')
  async signup(@Body() createAdminDto: CreateAdminDto) {
    const admin = await this.adminService.createAdmin(createAdminDto);
    return { message: 'Admin registered successfully', admin };
  }
}
