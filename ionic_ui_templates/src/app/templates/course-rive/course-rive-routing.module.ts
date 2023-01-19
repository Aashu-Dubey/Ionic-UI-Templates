import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiveModule, RIVE_FOLDER } from 'ng-rive';

import { CourseRivePage } from './course-rive.page';

const routes: Routes = [
  {
    path: '',
    component: CourseRivePage,
  },
  {
    path: 'on-boarding',
    loadChildren: () =>
      import('./views/on-boarding/on-boarding.module').then(
        (m) => m.OnBoardingPageModule
      ),
  },
  {
    path: 'content-view',
    loadChildren: () =>
      import('./views/content-view/content-view.module').then(
        (m) => m.ContentViewPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RiveModule],
  exports: [RouterModule, RiveModule],
  providers: [
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/course_rive/rive',
    },
  ],
})
export class CourseRivePageRoutingModule {}
