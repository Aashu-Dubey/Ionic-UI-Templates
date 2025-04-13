import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatbotComponent } from './chatbot.component';

const routes: Routes = [
  {
    path: '',
    component: ChatbotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatbotComponentRoutingModule {}
