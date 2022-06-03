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
    public voteAverage: number
  ) {}
}
