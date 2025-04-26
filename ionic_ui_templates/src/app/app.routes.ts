import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./drawer/drawer.routes').then((m) => m.routes),
  },
  {
    path: 'hotel-booking',
    loadComponent: () =>
      import('./templates/hotel-booking/hotel-booking.page').then(
        (m) => m.HotelBookingPage
      ),
  },
  {
    path: 'course-rive',
    loadComponent: () =>
      import('./templates/course-rive/course-rive.page').then(
        (m) => m.CourseRivePage
      ),
  },
];
