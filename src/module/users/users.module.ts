import { Module } from '@nestjs/common';
import { authService } from '../auth/auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, authService],
})
export class UsersModule {}
