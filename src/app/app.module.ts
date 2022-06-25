import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ComponentsModule,
    LayoutModule,
    PagesModule,
    PipesModule,
  ],
  providers: [
    {
      provide: 'test_title',
      useValue: { title: 'Lorem ipsum dolor sit amet' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
