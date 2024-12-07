import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findById(id);
  }

  @Post()
  createUser(@Body() body: Partial<User>): User {
    return this.usersService.create(body);
  }
}
