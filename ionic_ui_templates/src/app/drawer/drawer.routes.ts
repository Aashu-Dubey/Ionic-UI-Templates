import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadComponent: () => import('./drawer.page').then((m) => m.DrawerPage),
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
