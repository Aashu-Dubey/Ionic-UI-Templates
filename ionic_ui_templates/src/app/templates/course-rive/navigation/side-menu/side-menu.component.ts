import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
} from '@ionic/angular/standalone';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';
import {
  MenuItem,
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
  @ViewChildren('menuItems', { read: ElementRef })
  menuItems1Ref?: QueryList<ElementRef>;
  @ViewChildren('menuItems2', { read: ElementRef })
  menuItems2Ref?: QueryList<ElementRef>;

  menuItems = menuItemsList;
  menuItems2 = menuItems2List;
  menuItems3 = menuItems3List;

  selectedMenu = this.menuItems[0];
  isDarkMode = false;

  constructor(
    private animationCtrl: AnimationController,
    private navigation: NavController,
    public platform: Platform
  ) {}

  ngOnInit() {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    for (let i = 0; i < this.menuItems.length; i++) {
      setTimeout(() => (this.menuItems[i].show = true), 1000 + i * 500);
    }
    for (let i = 0; i < this.menuItems2.length; i++) {
      setTimeout(
        () => (this.menuItems2[i].show = true),
        1000 + (i + this.menuItems.length) * 500
      );
    }
    for (let i = 0; i < this.menuItems3.length; i++) {
      setTimeout(
        () => (this.menuItems3[i].show = true),
        1000 + (i + this.menuItems.length + this.menuItems2.length) * 500
      );
    }
  }

  onMenuItemPress(index: number, menu: MenuItem) {
    let lastSelection = this.menuItems.indexOf(this.selectedMenu);
    if (lastSelection < 0) {
      lastSelection =
        this.menuItems.length + this.menuItems2.indexOf(this.selectedMenu);
    }

    menu.status = true;
    setTimeout(() => {
      menu.status = false;
    }, 1000);
    this.selectedMenu = menu;

    const menu1RefArray = this.menuItems1Ref?.toArray();
    const menu2RefArray = this.menuItems2Ref?.toArray();
    menu2RefArray && menu1RefArray?.push(...menu2RefArray);

    for (let i = 0; i < menu1RefArray?.length!; i++) {
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

  onDarkModeToggle() {
    this.menuItems3[0].status = this.isDarkMode;
  }

  goBack() {
    this.navigation.back({ animated: false });
  }

  trackMenuItems(_i: number, tab: MenuItem) {
    return tab.id;
  }
}
