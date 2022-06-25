import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { GenresSubmenuComponent } from './genres-submenu/genres-submenu.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, GenresSubmenuComponent],
  exports: [NgbModule, HeaderComponent, SidebarComponent],
  imports: [RouterModule, CommonModule, NgbModule],
})
export class LayoutModule {}
