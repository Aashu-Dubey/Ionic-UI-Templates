import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelBookingPage } from './hotel-booking.page';

const routes: Routes = [
  {
    path: '',
    component: HotelBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelBookingPageRoutingModule {}
