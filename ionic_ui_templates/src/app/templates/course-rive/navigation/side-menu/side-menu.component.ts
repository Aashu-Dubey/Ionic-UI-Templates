import { CommonModule } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import {
  AnimationController,
  IonCol,
  IonIcon,
  IonItem,
  IonRow,
  IonText,
  IonToggle,
  NavController,
  Platform,
} from '@ionic/angular';
import type { ToggleChangeEventDetail } from '@ionic/core/components';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';

import type { MenuItem } from '../../models/side-menu';
import {
  menuItems2List,
  menuItems3List,
  menuItemsList,
} from '../../models/side-menu';

import { MenuRowComponent } from './menu-row/menu-row.component';

@Component({
  selector: 'cr-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    IonRow,
    IonCol,
    IonText,
    IonIcon,
    IonItem,
    IonToggle,
    MenuRowComponent,
    RiveCanvas,
    RiveStateMachine,
    RiveSMInput,
    CommonModule,
  ],
})
export class SideMenuComponent implements OnInit {
  private animationCtrl = inject(AnimationController);
  private navigation = inject(NavController);
  platform = inject(Platform);

  private readonly menuItems1Ref = viewChildren('menuItems', {
    read: ElementRef,
  });
  private readonly menuItems2Ref = viewChildren('menuItems2', {
    read: ElementRef,
  });

  menuItems = signal(menuItemsList);
  menuItems2 = signal(menuItems2List);
  menuItems3 = signal(menuItems3List);
  readonly allMenus = computed(() => [...this.menuItems(), ...this.menuItems2()]);

  // Plain field: read synchronously locally, never bound in the template.
  selectedMenuId = this.menuItems()[0].id;
  readonly isDarkMode = signal(false);

  ngOnInit(): void {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    for (let i = 0; i < this.menuItems().length; i++) {
      setTimeout(
        () => {
          this.menuItems.update((items) => items.map((item, j) => (j === i ? { ...item, show: true } : item)));
        },
        1000 + i * 500,
      );
    }
    for (let i = 0; i < this.menuItems2().length; i++) {
      setTimeout(
        () => {
          this.menuItems2.update((items) => items.map((item, j) => (j === i ? { ...item, show: true } : item)));
        },
        1000 + (i + this.menuItems().length) * 500,
      );
    }
    for (let i = 0; i < this.menuItems3().length; i++) {
      setTimeout(
        () => {
          this.menuItems3.update((items) => items.map((item, j) => (j === i ? { ...item, show: true } : item)));
        },
        1000 + (i + this.menuItems().length + this.menuItems2().length) * 500,
      );
    }
  }

  onMenuItemPress(menu: MenuItem): void {
    if (menu.id === this.selectedMenuId) {
      return;
    }

    const index = this.allMenus().findIndex((item) => item.id === menu.id);
    const lastSelection = this.allMenus().findIndex((item) => item.id === this.selectedMenuId);

    // allMenus is menuItems followed by menuItems2, so the index identifies the list.
    const menuItemList = index < this.menuItems().length ? this.menuItems : this.menuItems2;

    menuItemList.update((items) => items.map((item) => (item.id === menu.id ? { ...item, status: true } : item)));
    setTimeout(() => {
      menuItemList.update((items) => items.map((item) => (item.id === menu.id ? { ...item, status: false } : item)));
    }, 1000);
    this.selectedMenuId = menu.id;

    const menuRefs = [...this.menuItems1Ref(), ...this.menuItems2Ref()];

    for (let i = 0; i < menuRefs.length; i++) {
      const element = menuRefs[i].nativeElement;

      if (i === lastSelection || i === index) {
        this.animationCtrl
          .create()
          .addElement(element.querySelector('.menu-btn-bg'))
          .duration(250)
          .easing('cubic-bezier(0.2, 0.8, 0.2, 1.0)')
          .fromTo(
            'width',
            i === index ? '0px' : '272px',
            i === index ? '272px' : '0px'
          )
          .play();
      }
    }
  }

  onDarkModeToggle(event: CustomEvent<ToggleChangeEventDetail>): void {
    this.isDarkMode.set(event.detail.checked);
    this.menuItems3.update((items) =>
      items.map((item, j) => (j === 0 ? { ...item, status: event.detail.checked } : item)),
    );
  }

  goBack(): void {
    this.navigation.back({ animated: false });
  }
}
