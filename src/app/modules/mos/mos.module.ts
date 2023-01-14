import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageMosComponent } from './pages/page-mos/page-mos.component';
import { MosRoutingModule } from './mos-routing.module';
// import { NavMosComponent } from './components/nav-mos/nav-mos.component';
import { MovieTheaterModule } from './modules/movie-theater/movie-theater.module';
import { TheaterModule } from './modules/theater/theater.module';



@NgModule({
  declarations: [
    PageTwoComponent,
    PageOneComponent,
    PageMosComponent,
    // NavMosComponent
  ],
  imports: [
    CommonModule,
    MosRoutingModule,
    MovieTheaterModule,
    TheaterModule,
  ],
  providers: [
  ],
})
export class MosModule { }
