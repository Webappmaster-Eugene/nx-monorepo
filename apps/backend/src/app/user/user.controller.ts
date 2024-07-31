import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<{ message: string }> {
    return this.userService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: RegisterDto): Promise<{ message: string }> {
    return this.userService.login(dto);
  }
}

export class RegisterDto {
  email: string;
  password: string;
  displayName: string;
}
