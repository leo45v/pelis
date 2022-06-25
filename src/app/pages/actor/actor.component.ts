import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss'],
})
export class ActorComponent implements OnInit {
  actors: Actor[] = [];
  page: number = 1;

  constructor(private readonly actorService: ActorService) {}

  ngOnInit(): void {
    this.fetchActors();
  }

  onChangePage(page: number): void {
    this.page = page;
    this.fetchActors();
  }

  private fetchActors(): void {
    this.actorService
      .getActors(this.page)
      .subscribe((actors) => (this.actors = actors || []));
  }
}
