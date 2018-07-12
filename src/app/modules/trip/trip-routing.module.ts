import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnerLayoutComponent } from '@shared/layouts';
import { TripPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: InnerLayoutComponent,
    children: [
      { path: 'trip_page', component: TripPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
