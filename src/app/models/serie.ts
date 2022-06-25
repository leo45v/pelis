export class Serie {
  constructor(
    public backdropPath: string, // "/vNnLAKmoczRlNarxyGrrw0KSOeX.jpg",
    public first_air_date: Date, // "2012-10-10",
    public genreIds: Array<number>,
    public id: number, // 1412,
    public mediaType: string, // "tv",
    public name: string, // "Arrow",
    public originCountry: Array<string>,
    public originalLanguage: string, // "en",
    public originalName: string, // "Arrow",
    public overview: string, // "",
    public posterPath: string, // "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
    public voteAverage: number, // 6.7,
    public voteCount: number // 5061
  ) {}
}
