export class Movie {
  constructor(
    public posterPath: string,
    public adult: boolean,
    public overview: string,
    public releaseDate: Date,
    public genreIds: Array<number>,
    public id: number,
    public originalTitle: string,
    public originalLanguage: string,
    public title: string,
    public backdropPath: string,
    public popularity: number,
    public voteCount: number,
    public video: boolean,
    public voteAverage: number,
    public production_countries: Array<{
      iso_3166_1: string;
      name: string;
    }>,
    public production_companies: Array<{
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }>,
    public mediaType: string,
    public genres?: Array<{ id: number; name: string }>,
    public spoken_languages?: Array<{ iso_639_1: string; name: string }>
  ) {}
}
