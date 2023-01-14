import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/mos/mos.module').then((m) => m.MosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // initialNavigation: 'enabledNonBlocking',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
