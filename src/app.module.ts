import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    // Dotenv config
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    // Contenido estático (Font-End)
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // Mongo
    // MongooseModule.forRoot(process.env.MONGODB!), // Error, type undefined is not assignable to type string
    MongooseModule.forRoot(process.env.MONGODB!, {
      dbName: 'nest-pokedex',
    }), // Error, type undefined is not assignable to type string
    // Modules
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
