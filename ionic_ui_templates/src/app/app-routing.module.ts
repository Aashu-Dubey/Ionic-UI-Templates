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
      import('./hotel-booking/hotel-booking.module').then(
        (m) => m.HotelBookingPageModule
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
