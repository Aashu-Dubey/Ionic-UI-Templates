import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteFriendPage } from './invite-friend.page';

const routes: Routes = [
  {
    path: '',
    component: InviteFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteFriendPageRoutingModule {}
