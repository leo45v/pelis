import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'actores',
    component: ActorComponent,
  },
  {
    path: 'generos',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
