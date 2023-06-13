import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly service: UsersService) {}

  async validateUsers(username: string, password: number): Promise<any> {
    return await this.service.validateUser(username, password);
  }
}
