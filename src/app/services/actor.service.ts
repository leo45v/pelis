import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actor } from '../models/actor';
import { Movie } from '../models/movie';
import { Serie } from '../models/serie';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private urlMovie = `${environment.moviesEndPointUrl}/person`;

  constructor(
    private readonly http: HttpClient,
    private readonly loadingService: LoadingService
  ) {}

  getActors(page: number = 1) {
    const urlPopularActors = `${this.urlMovie}/popular?${environment.moviesEndPointKey}&language=ES&page=${page}`;
    const contentType = 'application/json; charset=utf-8';

    const headers = new HttpHeaders().set('Content-Type', contentType);

    this.loadingService.setState(true);
    return this.http
      .get<{ results: Actor[] }>(urlPopularActors, { headers })
      .pipe(
        tap((r) => console.log(r)),
        map((m: { results: any[] }) =>
          m.results.map(
            (actor) =>
              new Actor(
                `${environment.imagesEndPointUrl}${actor.profile_path}`,
                actor.adult,
                actor.id,
                actor.name,
                actor.popularity,
                actor.known_for.map((movie: any) =>
                  movie.media_type === 'movie'
                    ? new Movie(
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
                    : new Serie(
                        `${environment.imagesEndPointUrl}${movie.backdrop_path}`,
                        movie.first_air_date,
                        movie.genre_ids,
                        movie.id,
                        movie.media_type,
                        movie.name,
                        movie.origin_country,
                        movie.original_language,
                        movie.original_name,
                        movie.overview,
                        `${environment.imagesEndPointUrl}${movie.poster_path}`,
                        movie.vote_average,
                        movie.vote_count
                      )
                )
              )
          )
        ),
        tap(() => this.loadingService.setState(false))
      );
  }
}
