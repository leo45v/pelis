import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Provider } from 'src/app/models/provider';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  provider!: Provider;

  constructor(
    private readonly movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    console.log(id);
    this.movieService.getMovie(id).subscribe((m) => {
      console.log(m);
      this.movie = m;
    });
    this.movieService.getProviders(id).subscribe((p) => {
      console.log(p);
      this.provider = p;
    });
  }
}
