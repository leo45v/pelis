import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresSubmenuComponent } from './genres-submenu.component';

describe('GenresSubmenuComponent', () => {
  let component: GenresSubmenuComponent;
  let fixture: ComponentFixture<GenresSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
