import { Routes } from '@angular/router';
import { DrawerPage } from './drawer.page';

export const routes: Routes = [
  {
    path: 'menu',
    component: DrawerPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'help',
        loadComponent: () => import('./help/help.page').then((m) => m.HelpPage),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./feedback/feedback.page').then((m) => m.FeedbackPage),
      },
      {
        path: 'invite-friend',
        loadComponent: () =>
          import('./invite-friend/invite-friend.page').then(
            (m) => m.InviteFriendPage
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
];
