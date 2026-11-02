import { CommonModule } from '@angular/common';
import type { OnInit, QueryList } from '@angular/core';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChildren,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    MenuRowComponent,
    RiveCanvas,
    RiveStateMachine,
    RiveSMInput,
    CommonModule,
  ],
})
export class SideMenuComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private animationCtrl = inject(AnimationController);
  private navigation = inject(NavController);
  platform = inject(Platform);

  @ViewChildren('menuItems', { read: ElementRef })
  menuItems1Ref?: QueryList<ElementRef>;
  @ViewChildren('menuItems2', { read: ElementRef })
  menuItems2Ref?: QueryList<ElementRef>;

  menuItems = menuItemsList;
  menuItems2 = menuItems2List;
  menuItems3 = menuItems3List;

  selectedMenu = this.menuItems[0];
  isDarkMode = false;

  ngOnInit(): void {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    for (let i = 0; i < this.menuItems.length; i++) {
      setTimeout(
        () => {
          this.menuItems[i].show = true;
          this.cdr.markForCheck();
        },
        1000 + i * 500,
      );
    }
    for (let i = 0; i < this.menuItems2.length; i++) {
      setTimeout(
        () => {
          this.menuItems2[i].show = true;
          this.cdr.markForCheck();
        },
        1000 + (i + this.menuItems.length) * 500,
      );
    }
    for (let i = 0; i < this.menuItems3.length; i++) {
      setTimeout(
        () => {
          this.menuItems3[i].show = true;
          this.cdr.markForCheck();
        },
        1000 + (i + this.menuItems.length + this.menuItems2.length) * 500,
      );
    }
  }

  onMenuItemPress(index: number, menu: MenuItem): void {
    let lastSelection = this.menuItems.indexOf(this.selectedMenu);
    if (lastSelection < 0) {
      lastSelection =
        this.menuItems.length + this.menuItems2.indexOf(this.selectedMenu);
    }

    menu.status = true;
    setTimeout(() => {
      menu.status = false;
      this.cdr.markForCheck();
    }, 1000);
    this.selectedMenu = menu;

    const menu1RefArray = this.menuItems1Ref?.toArray() ?? [];
    const menu2RefArray = this.menuItems2Ref?.toArray() ?? [];
    menu1RefArray?.push(...menu2RefArray);

    for (let i = 0; i < menu1RefArray?.length; i++) {
      const itemRef = menu1RefArray?.[i];
      const element = itemRef?.nativeElement;

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

  onDarkModeToggle(): void {
    this.menuItems3[0].status = this.isDarkMode;
  }

  goBack(): void {
    this.navigation.back({ animated: false });
  }
}
