import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { SharedModule } from '@shared/shared.module';

import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule
  ],
  declarations: [
    HomeLayoutComponent,
    HomePageComponent
  ]
})
export class HomeModule { }
