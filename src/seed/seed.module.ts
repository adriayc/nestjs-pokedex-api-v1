import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    // Import module to use it (PokemonModule)
    PokemonModule,
  ],
})
export class SeedModule {}
