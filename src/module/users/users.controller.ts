import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger/dist';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { createDto } from './dto/create.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@ApiCreatedResponse({ schema: { example: 'User created succesfully' } })
@ApiBadRequestResponse()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  createUser(@Body() body: createDto): void {
    this.usersService.createUser();
  }
}
