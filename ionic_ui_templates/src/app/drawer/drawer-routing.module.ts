import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawerPage } from './drawer.page';

const routes: Routes = [
  {
    path: 'menu',
    component: DrawerPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('./help/help.module').then((m) => m.HelpPageModule),
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('./feedback/feedback.module').then(
            (m) => m.FeedbackPageModule
          ),
      },
      {
        path: 'invite-friend',
        loadChildren: () =>
          import('./invite-friend/invite-friend.module').then(
            (m) => m.InviteFriendPageModule
          ),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawerPageRoutingModule {}
