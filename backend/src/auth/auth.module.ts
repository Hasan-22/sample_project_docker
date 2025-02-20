import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Allow other modules to use AuthService
})
export class AuthModule {}
