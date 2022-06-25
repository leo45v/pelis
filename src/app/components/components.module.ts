import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { CardActorComponent } from './card-actor/card-actor.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, LoadingComponent, CardActorComponent],
  exports: [CardComponent, LoadingComponent, CardActorComponent],
  imports: [RouterModule, CommonModule, PipesModule],
})
export class ComponentsModule {}
