import { Injectable } from '@nestjs/common';

@Injectable()
export class authService {
  generatorToken(): string {
    return 'OK';
  }
}
