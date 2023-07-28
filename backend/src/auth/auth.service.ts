import { Injectable } from '@nestjs/common';
import { ExistingUserDto } from 'src/user/dto/existing-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async registerUser(user: ExistingUserDto) {
    const findUser = await this.userService.findOneByEmail(user.email);
    if (findUser) {
      throw new Error('User already exists');
    }
    const newUser = await this.userService.create(user);
    return { name: newUser.name, email: newUser.email };
  }
}
