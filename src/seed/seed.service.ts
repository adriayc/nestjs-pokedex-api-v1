import { Model } from 'mongoose';
import axios, { AxiosInstance } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    const { data } = await axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );
    // Format the data
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      await this.pokemonModel.create({ name, no });
    });

    return 'Seed executed!';
  }
}
