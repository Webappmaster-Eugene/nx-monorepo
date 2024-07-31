import { Injectable } from '@nestjs/common';
import {IUser} from "@backend/interfaces";


@Injectable()
export class UserService {
  getData(): { message: string } {
    let user: IUser
    return { message: 'Hello API' };
  }
}
