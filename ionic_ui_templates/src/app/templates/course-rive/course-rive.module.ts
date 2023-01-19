import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseRivePageRoutingModule } from './course-rive-routing.module';

import { CourseRivePage } from './course-rive.page';
import { SideMenuComponent } from './navigation/side-menu/side-menu.component';
import { BottomTabBarComponent } from './navigation/bottom-tab-bar/bottom-tab-bar.component';
import { OnBoardingPageModule } from './views/on-boarding/on-boarding.module';
import { ContentViewPageModule } from './views/content-view/content-view.module';
import { MenuRowComponent } from './navigation/side-menu/menu-row/menu-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseRivePageRoutingModule,
    OnBoardingPageModule,
    ContentViewPageModule,
  ],
  declarations: [
    CourseRivePage,
    SideMenuComponent,
    MenuRowComponent,
    BottomTabBarComponent,
  ],
})
export class CourseRivePageModule {}
