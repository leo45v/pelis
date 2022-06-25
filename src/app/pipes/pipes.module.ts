import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularityPipe } from './popularity.pipe';

@NgModule({
  declarations: [PopularityPipe],
  imports: [CommonModule],
  exports: [PopularityPipe],
})
export class PipesModule {}
