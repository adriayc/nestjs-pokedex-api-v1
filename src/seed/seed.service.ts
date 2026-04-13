import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // Delete all pokemon

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=105',
    );
    // Option #2
    // const insertPromisesArray: Promise<Pokemon>[] = [];
    // Option #3
    const pokemonToInsert: { name: string; no: number }[] = [];

    // Format the data
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      // Option #1
      // await this.pokemonModel.create({ name, no });
      // Option #2
      // insertPromisesArray.push(this.pokemonModel.create({ name, no }));
      // Option #3
      pokemonToInsert.push({ name, no });
    });

    // Option #2
    // await Promise.all(insertPromisesArray);
    // Option #3
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed!';
  }
}
