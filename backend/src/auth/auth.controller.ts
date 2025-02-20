import { Body, Controller, Post, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async signup(@Body() dto: AuthDto) {
    try {
      return await this.authService.signup(dto);
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Get('users')
  async getUsers() {
    return this.authService.getAllUsers();
  }
}
