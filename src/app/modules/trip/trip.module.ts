import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripPageComponent } from './pages';

import { TripRoutingModule } from './trip-routing.module';
import { SharedModule } from '@shared/shared.module';

import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TripRoutingModule, 
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    TripPageComponent
  ],

  providers: [
  ]
})
export class TripModule {}