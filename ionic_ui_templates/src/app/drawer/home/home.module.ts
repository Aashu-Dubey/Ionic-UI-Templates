import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NgxGaugeModule } from 'ngx-gauge';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxGaugeModule,
    FullCalendarModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  declarations: [HomePage]
})
export class HomePageModule {}
