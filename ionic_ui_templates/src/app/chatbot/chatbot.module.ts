import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotComponentRoutingModule } from './chatbot-routing.module';

import { ChatbotComponent } from './chatbot.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotComponentRoutingModule
  ],
})
export class LoginPageModule {}
