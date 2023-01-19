import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./drawer/drawer.module').then((m) => m.DrawerPageModule),
  },
  {
    path: 'hotel-booking',
    loadChildren: () =>
      import('./templates/hotel-booking/hotel-booking.module').then(
        (m) => m.HotelBookingPageModule
      ),
  },
  {
    path: 'course-rive',
    loadChildren: () =>
      import('./templates/course-rive/course-rive.module').then(
        (m) => m.CourseRivePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
