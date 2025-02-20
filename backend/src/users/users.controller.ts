import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get all users
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  // Get a specific user by ID
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }
}
