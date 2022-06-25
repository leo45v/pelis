import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreMovie } from '../models/genre-movie';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class GenreMovieService {
  private genres: BehaviorSubject<GenreMovie[]> = new BehaviorSubject<
    GenreMovie[]
  >([]);

  private urlMovie = `${environment.moviesEndPointUrl}/genre/movie`;

  constructor(
    private readonly http: HttpClient,
    private readonly loadingService: LoadingService
  ) {}

  getGenres() {
    const urlPopularMovies = `${this.urlMovie}/list?${environment.moviesEndPointKey}&language=ES`;
    const contentType = 'application/json; charset=utf-8';
    const headers = new HttpHeaders().set('Content-Type', contentType);
    this.loadingService.setState(true);

    return this.http
      .get<{ genres: GenreMovie[] }>(urlPopularMovies, { headers })
      .pipe(
        map((m: { genres: any[] }) =>
          m.genres.map((movie) => new GenreMovie(movie.id, movie.name))
        ),
        tap(
          (r) => (
            this.genres.next(r || []), this.loadingService.setState(false)
          )
        )
      );
  }

  getGenreById(id: number) {
    return this.genres
      .asObservable()
      .pipe(map((genres) => genres.find((g) => g.id === id)));
  }
}
