import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiveModule } from 'ng-rive';

import { OnBoardingPage } from './on-boarding.page';

const routes: Routes = [
  {
    path: '',
    component: OnBoardingPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RiveModule],
})
export class OnBoardingPageRoutingModule {}
