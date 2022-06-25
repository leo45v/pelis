import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreMovie } from 'src/app/models/genre-movie';
import { Movie } from 'src/app/models/movie';
import { GenreMovieService } from 'src/app/services/genre-movie.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  genre?: GenreMovie;
  moviesStore: Movie[] = [];
  page = 1;
  genreId!: number;

  constructor(
    private readonly movieService: MovieService,
    private readonly route: ActivatedRoute,
    private readonly genreMovieService: GenreMovieService
  ) {}

  ngOnInit(): void {
    if (
      !(
        'genreId' in this.route.snapshot.queryParams ||
        'page' in this.route.snapshot.queryParams
      )
    ) {
      this.fetchMovies();
    }
    this.route.queryParams.subscribe(({ genreId, page }) => {
      if (genreId) {
        this.genreId = Number(genreId);
        this.fetchMovies();
        this.genreMovieService.getGenreById(this.genreId).subscribe((g) => {
          this.genre = g;
        });
      } else if (page) {
        this.genre = undefined;
        this.page = Number(page);
        this.fetchMovies();
      }
    });
  }

  public onChangePage(page: number): void {
    this.page = page;
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.movieService
      .getPopularMoviesByGenre(this.genreId, this.page)
      .subscribe((m) => (this.moviesStore = m || []));
  }
}
