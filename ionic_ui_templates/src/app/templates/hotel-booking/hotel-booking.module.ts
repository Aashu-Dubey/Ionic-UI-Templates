import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelBookingPageRoutingModule } from './hotel-booking-routing.module';

import { HotelBookingPage } from './hotel-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelBookingPageRoutingModule
  ],
  declarations: [HotelBookingPage]
})
export class HotelBookingPageModule {}
