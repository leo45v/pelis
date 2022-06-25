import { Movie } from './movie';
import { Serie } from './serie';

export type Film = Movie | Serie;

export class Actor {
  constructor(
    public profile_path: string,
    public adult: boolean,
    public id: number,
    public name: string,
    public popularity: number,
    public known_for: Film[]
  ) {}
}
