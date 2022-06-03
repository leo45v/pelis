import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private urlMovie = `${environment.moviesEndPointUrl}/movie`;

  constructor(
    private readonly http: HttpClient,
    private readonly loadingService: LoadingService
  ) {}

  getPopularMovies(page: number = 1) {
    const urlPopularMovies = `${this.urlMovie}/popular?${environment.moviesEndPointKey}&language=en-US&page=${page}`;
    const contentType = 'application/json; charset=utf-8';

    const headers = new HttpHeaders().set('Content-Type', contentType);

    this.loadingService.setState(true);

    return this.http
      .get<{ results: Movie[] }>(urlPopularMovies, { headers })
      .pipe(
        map((m: { results: any[] }) =>
          m.results.map(
            (movie) =>
              new Movie(
                `${environment.imagesEndPointUrl}${movie.poster_path}`,
                movie.adult,
                movie.overview,
                new Date(movie.release_date),
                movie.genre_ids,
                movie.id,
                movie.original_title,
                movie.original_language,
                movie.title,
                `${environment.imagesEndPointUrl}${movie.backdrop_path}`,
                movie.popularity,
                movie.vote_count,
                movie.video,
                movie.vote_average
              )
          )
        ),
        tap(() => this.loadingService.setState(false))
      );
  }
}
