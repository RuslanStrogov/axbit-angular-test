import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMovieTheaterComponent } from './components/list-movie-theater/list-movie-theater.component';
import { MovieTheaterService } from './services/movie-theater.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    ListMovieTheaterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListMovieTheaterComponent,
  ],
  providers: [
    MovieTheaterService,
  ],
})
export class MovieTheaterModule { }
