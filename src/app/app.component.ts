import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './models/movie';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  moviesStore = new BehaviorSubject<Movie[]>([]);
  movies!: Observable<Movie[]>;
  page = 1;

  constructor(private readonly movieService: MovieService) {}
  ngOnInit(): void {
    this.movies = this.moviesStore.asObservable();
    this.movieService
      .getPopularMovies(this.page)
      .subscribe((m) => this.moviesStore.getValue().push(...m));
  }

  public onChangePage(page: number): void {
    this.page = page;
    this.movieService
      .getPopularMovies(this.page)
      .subscribe((m) => this.moviesStore.getValue().push(...m));
  }
}
