import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true, envFilePath: 'envs/.backend.env'}), MongooseModule.forRootAsync(getMongoConfig()), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
