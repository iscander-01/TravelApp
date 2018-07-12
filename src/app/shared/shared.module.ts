import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppSettings } from './app.settings';

import { InnerLayoutComponent } from '@shared/layouts';
import { TripModel } from '@shared/models/trip.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule, 
  ],
  declarations: [
    InnerLayoutComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    InnerLayoutComponent
  ],
  providers: [
    TripModel,
    AppSettings
  ]
})
export class SharedModule {}
