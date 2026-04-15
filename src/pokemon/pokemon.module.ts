import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    // Config module (uso de variables de entorno)
    ConfigModule,
    // Mongo module
    MongooseModule.forFeature([
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ]),
  ],
  exports: [
    // Export for use in another module (SeedModule)
    MongooseModule,
  ],
})
export class PokemonModule {}
