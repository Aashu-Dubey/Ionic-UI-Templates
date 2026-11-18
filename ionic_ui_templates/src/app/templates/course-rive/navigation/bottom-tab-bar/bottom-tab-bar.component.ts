import type { OnInit} from '@angular/core';
import { Component, model, signal } from '@angular/core';
import { IonCol, IonRow } from '@ionic/angular';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';

import type { BottomTabItem} from '../../models/tabs';
import { tabItemsList } from '../../models/tabs';

@Component({
  selector: 'cr-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.component.html',
  styleUrls: ['./bottom-tab-bar.component.scss'],
  imports: [
    IonRow,
    IonCol,
    RiveCanvas,
    RiveStateMachine,
    RiveSMInput,
  ],
})
export class BottomTabBarComponent implements OnInit {
  tabItems = signal(tabItemsList);
  readonly selectedTab = model.required<BottomTabItem>();

  ngOnInit(): void {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    for (let i = 0; i < this.tabItems().length; i++) {
      setTimeout(
        () => {
          this.tabItems.update((prevTabs) => prevTabs.map((t, i2) => (i2 === i ? { ...t, show: true } : t)));
        },
        1000 + i * 500,
      );
    }
  }

  onIconPress(tab: BottomTabItem): void {
    if (this.selectedTab().id !== tab.id) {
      this.tabItems.update((items) => items.map((item) => (item.id === tab.id ? { ...item, status: true } : item)));
      setTimeout(() => {
        this.tabItems.update((items) => items.map((item) => (item.id === tab.id ? { ...item, status: false } : item)));
      }, 1000);

      const updated = this.tabItems().find((item) => item.id === tab.id) ?? tab;
      this.selectedTab.set(updated);
    }
  }
}
