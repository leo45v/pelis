import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Provider } from '../models/provider';
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

  getProviders(movieId: number) {
    const urlPopularMovies = `${this.urlMovie}/${movieId}/watch/providers?${environment.moviesEndPointKey}&language=ES`;
    const contentType = 'application/json; charset=utf-8';

    const headers = new HttpHeaders().set('Content-Type', contentType);

    return this.http.get<any>(urlPopularMovies, { headers }).pipe(
      tap((r) => console.log(r)),
      map((m: { results: { BO: any } }) => {
        return new Provider(
          m.results.BO.buy,
          m.results.BO.flatrate,
          m.results.BO.link,
          m.results.BO.rent
        );
      })
    );
  }

  getMovie(movieId: number) {
    const urlPopularMovies = `${this.urlMovie}/${movieId}?${environment.moviesEndPointKey}&language=ES`;
    const contentType = 'application/json; charset=utf-8';

    const headers = new HttpHeaders().set('Content-Type', contentType);

    this.loadingService.setState(true);
    return this.http.get<any>(urlPopularMovies, { headers }).pipe(
      map(
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
            movie.vote_average,
            movie.production_countries,
            movie.production_companies,
            movie.media_type,
            movie.genres,
            movie.spoken_languages
          )
      ),
      tap(() => this.loadingService.setState(false))
    );
  }

  getPopularMovies(page: number = 1) {
    const urlPopularMovies = `${this.urlMovie}/popular?${environment.moviesEndPointKey}&language=ES&page=${page}`;
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
                movie.vote_average,
                movie.production_countries,
                movie.production_companies,
                movie.media_type
              )
          )
        ),
        tap((r) => this.loadingService.setState(false))
      );
  }

  getPopularMoviesByGenre(genreId: number, page: number = 1) {
    if (!genreId) return this.getPopularMovies(page);
    const urlPopularMoviesByGenre = `${this.urlMovie}/popular?${environment.moviesEndPointKey}&language=ES&page=${page}&with_genres=${genreId}`;
    const contentType = 'application/json; charset=utf-8';

    const headers = new HttpHeaders().set('Content-Type', contentType);

    this.loadingService.setState(true);

    return this.http
      .get<{ results: Movie[] }>(urlPopularMoviesByGenre, { headers })
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
                movie.vote_average,
                movie.production_countries,
                movie.production_companies,
                movie.media_type
              )
          )
        ),
        tap(() => this.loadingService.setState(false))
      );
  }
}
