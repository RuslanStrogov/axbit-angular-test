import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMosComponent } from './pages/page-mos/page-mos.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

export const routes: Routes = [
  {
    path: 'all',
    component: PageMosComponent,
  },
  {
    path: 'one',
    component: PageOneComponent,
  },
  {
    path: 'two',
    component: PageTwoComponent,
  },
  {
    path: '**',
    redirectTo: '/one',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MosRoutingModule { }
