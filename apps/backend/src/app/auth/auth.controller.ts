import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto): { message: string } {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: RegisterDto): { message: string } {
    return this.authService.login(dto);
  }
}

export class RegisterDto {
  email: string;
  password: string;
  displayName: string;
}
