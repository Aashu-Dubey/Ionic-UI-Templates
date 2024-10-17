import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NgxGaugeModule } from 'ngx-gauge';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotComponent } from 'src/app/chatbot/chatbot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    NgxGaugeModule,
    FullCalendarModule,
    IonicModule,
    HttpClientModule,
  ],
  providers: [],
  declarations: [HomePage, ChatbotComponent]
})
export class HomePageModule {}
