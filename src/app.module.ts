import { Module } from '@nestjs/common';
import { authModule } from './module/auth/auth.module';
import { UsersModule } from './module/users/users.module';

@Module({
  imports: [UsersModule, authModule],
})
export class AppModule {}
