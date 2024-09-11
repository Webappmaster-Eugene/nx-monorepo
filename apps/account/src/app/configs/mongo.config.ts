import {MongooseModuleAsyncOptions} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";

export function getMongoConfig(): MongooseModuleAsyncOptions {
  return {
    useFactory: (configService: ConfigService) => ({uri: getMongoString()}),
    inject: [ConfigService],
    imports:[ConfigModule]
  }
}

const getMongoString = () => {
  const {MONGO_CONNECT} = process.env;
  return `mongodb://${MONGO_CONNECT}`
}
