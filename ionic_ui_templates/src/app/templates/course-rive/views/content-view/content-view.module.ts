import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContentViewPageRoutingModule } from './content-view-routing.module';

import { ContentViewPage } from './content-view.page';
import { ShuffleArrayPipe } from '../../helper/shuffle-array/shuffle-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentViewPageRoutingModule,
  ],
  exports: [ContentViewPage],
  declarations: [ContentViewPage, ShuffleArrayPipe],
})
export class ContentViewPageModule {}
