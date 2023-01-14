import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTheaterComponent } from './components/list-theater/list-theater.component';
import { TheaterService } from './services/theater.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    ListTheaterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListTheaterComponent
  ],
  providers: [
    TheaterService,
  ],
})
export class TheaterModule { }
