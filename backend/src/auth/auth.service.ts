import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { AuthDto } from '../auth/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signup(dto: AuthDto) {
    console.log('Signup payload:', dto);  // Debugging: log the payload to check if it's correct
    try {
      const user = this.userRepository.create(dto);  // Create a new user
      return await this.userRepository.save(user);  // Save the user to DB
    } catch (error) {
      console.error('Error during signup:', error);  // Log any error
      throw error;  // Throw the error to the controller
    }
  }

  async login(dto: AuthDto) {
    const user = await this.userRepository.findOne({ where: { email: dto.email } });
    if (!user || user.password !== dto.password) {
      return { message: 'Invalid credentials' };
    }
    return { message: 'Login successful' };
  }

  async getAllUsers() {
    return this.userRepository.find();
  }
}
