import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentViewPage } from './content-view.page';

const routes: Routes = [
  {
    path: '',
    component: ContentViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentViewPageRoutingModule {}
