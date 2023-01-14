import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieTheaterComponent } from './list-movie-theater.component';

describe('ListMovieTheaterComponent', () => {
  let component: ListMovieTheaterComponent;
  let fixture: ComponentFixture<ListMovieTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieTheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
