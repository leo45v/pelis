import { Component, Input, OnInit } from '@angular/core';
import { Actor, Film } from 'src/app/models/actor';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss'],
})
export class CardActorComponent implements OnInit {
  @Input() actor!: Actor;

  constructor() {}

  ngOnInit(): void {}

  getTitle(film: Film) {
    if (film instanceof Movie) {
      return film.title;
    }
    return film.name;
  }

  isMovie(film: Film) {
    return film.mediaType === 'movie';
  }
}
