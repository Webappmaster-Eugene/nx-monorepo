import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AccountLogin, AccountRegister } from '@purple/contracts';
import { JWTAuthGuard } from '../guards/jwt.guard';
import { UserId } from '../guards/user.decorator';

@Controller('user')
export class UserController {
  constructor() {}

  @UseGuards(JWTAuthGuard)
  @Post('login')
  async info(@UserId() userId: string) {}
}
