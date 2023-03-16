import { Injectable } from '@nestjs/common';
import { authService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(private readonly authService: authService) {}

  createUser(): void {
    this.authService.generatorToken();
  }
}
