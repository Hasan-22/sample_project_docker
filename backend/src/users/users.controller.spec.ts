import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service'; // Import the service

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService], // Add the UsersService provider
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService); // Make sure service is also available
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a list of users', () => {
    const users = service.getAllUsers(); // Use the service to fetch users
    expect(users).toEqual([{ id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Alice Johnson' },
      { id: 4, name: 'Bob Smith' }]); // Match expected output
  });
});
