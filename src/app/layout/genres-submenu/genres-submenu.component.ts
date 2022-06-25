import { Component, OnInit } from '@angular/core';
import { GenreMovie } from 'src/app/models/genre-movie';
import { GenreMovieService } from 'src/app/services/genre-movie.service';

@Component({
  selector: 'app-genres-submenu',
  templateUrl: './genres-submenu.component.html',
  styleUrls: ['./genres-submenu.component.scss'],
})
export class GenresSubmenuComponent implements OnInit {
  public genres: GenreMovie[] = [];

  constructor(private genreMovieService: GenreMovieService) {}

  ngOnInit(): void {
    this.genreMovieService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }
}
