import { Document } from 'mongoose';
import { IUser, UserRole } from '@backend/interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document implements IUser{
  @Prop()
  _id: string;

  @Prop()
  displayName: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  passwordHash: string;

  @Prop({required: true, enum: UserRole, default: UserRole.Student, type: String})
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User)
