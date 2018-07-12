import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLayoutComponent } from './layouts/home-layout.component';
import { HomePageComponent } from './pages/home-page.component';

const routes: Routes = [{
  path: '',
  component: HomeLayoutComponent,
  children: [
    { path: '', component: HomePageComponent, pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  constructor() {

  }

}
