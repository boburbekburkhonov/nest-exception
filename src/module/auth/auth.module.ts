import { Module } from '@nestjs/common';
import { authService } from './auth.service';

@Module({
  controllers: [],
  providers: [authService],
})
export class authModule {}
