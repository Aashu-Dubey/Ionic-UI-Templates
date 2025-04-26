import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCol, IonRow } from '@ionic/angular/standalone';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';
import { BottomTabItem, tabItemsList } from '../../models/tabs';

@Component({
  selector: 'cr-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.component.html',
  styleUrls: ['./bottom-tab-bar.component.scss'],
  imports: [
    CommonModule,
    IonRow,
    IonCol,
    RiveCanvas,
    RiveStateMachine,
    RiveSMInput,
  ],
})
export class BottomTabBarComponent implements OnInit {
  tabItems = tabItemsList;
  @Input() selectedTab: BottomTabItem = this.tabItems[0];
  @Output() onTabChange = new EventEmitter<BottomTabItem>();

  constructor() {}

  ngOnInit() {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    for (let i = 0; i < this.tabItems.length; i++) {
      setTimeout(() => (this.tabItems[i].show = true), 1000 + i * 500);
    }
  }

  onIconPress(tab: BottomTabItem) {
    if (this.selectedTab !== tab) {
      tab.status = true;
      setTimeout(() => {
        tab.status = false;
      }, 1000);
      this.onTabChange.emit(tab);
    }
  }

  trackTabItems(_i: number, tab: BottomTabItem) {
    return tab.id;
  }
}
