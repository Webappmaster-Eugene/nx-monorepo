import {Body, Injectable} from '@nestjs/common';
import {IUser} from "@backend/interfaces";
import {RegisterDto} from "./auth.controller";


@Injectable()
export class AuthService {
constructor(private readonly userRepository: UserRepository) {
}
  async register(dto: RegisterDto) {
    return this.authService.login(dto);
  }

  async login(@Body() dto: RegisterDto) {
    return this.authService.login(dto);
  }
}
