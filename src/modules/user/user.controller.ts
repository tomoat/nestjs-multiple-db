import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  addSetting(
    @Body('name') name: string,
  ): Promise<string> {
    return this.userService.createUser(name);
  }
}
