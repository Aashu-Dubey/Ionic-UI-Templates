import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import {
  menuController,
  AnimationBuilder,
  createAnimation,
  MenuI,
  Animation,
} from '@ionic/core';
import { DrawerScreen } from '../types/drawer';

/*
 took it from main code and added my animations
 "https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/menu-controller/animations/reveal.ts"
*/
export const revealAnimation: AnimationBuilder = (
  menu: MenuI,
  anims: Animation[]
) => {
  const openedX = menu.width * (menu.isEndSide ? -1 : 1) + 'px';
  const contentOpen = createAnimation()
    .addElement(menu.contentEl)
    .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);
  /* menu.contentEl.insertAdjacentHTML(
    'afterbegin',
    '<div style="margin-top: 50px">inserted text</div>'
  ); */
  return createAnimation()
    .duration(400)
    .addAnimation(contentOpen)
    .addAnimation(anims);
};

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.page.html',
  styleUrls: ['./drawer.page.scss'],
})
export class DrawerPage implements AfterViewInit {
  @ViewChild('userAvatar', { read: ElementRef, static: true })
  userAvatarRef: ElementRef;
  @ViewChild('menuIcon', { read: ElementRef, static: true })
  menuIconRef: ElementRef;
  @ViewChildren('drawerItemList', { read: ElementRef })
  drawerItemListRef: QueryList<ElementRef>;

  appPages: DrawerScreen[] = [
    { name: 'Home', icon: 'home', url: '/menu/home' },
    {
      name: 'Help',
      icon: 'people-circle-sharp',
      isAsset: true,
      url: '/menu/help',
    },
    { name: 'Feedback', icon: 'help', url: '/menu/feedback' },
    { name: 'Invite Friend', icon: 'group', url: '/menu/invite-friend' },
    { name: 'Rate the app', icon: 'share', url: undefined },
    { name: 'About Us', icon: 'info', url: undefined },
  ];
  drawerWidth: number;
  rowWidth: number;
  activeTab = 'Home';
  isSplitPane = false; // hide menu button if split pane is enabled (desktop, pad etc.)

  constructor(public platform: Platform, private menu: MenuController) {
    this.widthCalculations();

    this.platform.resize.subscribe(() => {
      this.widthCalculations();
    });
  }

  ngAfterViewInit() {
    this.initDrawerAnimation();
  }

  // calculate width for drawer item's active background
  widthCalculations() {
    const deviceWidth = this.platform.width();
    this.drawerWidth = deviceWidth * 0.75;
    if (deviceWidth > 992) {
      const splitPaneWidth = (deviceWidth * 28) / 100; // default max split pane width is 28% after 992px
      this.rowWidth = splitPaneWidth - 64;
      this.isSplitPane = true;
    } else {
      this.rowWidth = deviceWidth * 0.75 - 64;
      // TODO:- Doesn't reflect as the width changes, need to refresh for proper animations
      // this.isSplitPane = false; // showing but animations aren't updating according to width, so that needs to be handled
    }
  }

  initDrawerAnimation() {
    // Avatar animation
    const avatarAnim = createAnimation()
      .addElement(this.userAvatarRef.nativeElement)
      // .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
      .fromTo('transform', 'rotate(36deg) scale(0.8)', 'rotate(0deg) scale(1)');

    // Drawer Items active background
    const drawerItems: Animation[] = [];
    const itemRefArray = this.drawerItemListRef.toArray();
    for (const itemRef of itemRefArray) {
      const element = itemRef.nativeElement;
      const drawerItemAnim = createAnimation()
        .addElement(element.querySelector('.drawerInnerItem'))
        .fromTo(
          'transform',
          `translateX(-${this.rowWidth}px)`,
          'translateX(-0px)'
        );
      drawerItems.push(drawerItemAnim);
    }

    // Menu -> arrow icon animation
    const menuElement = this.menuIconRef.nativeElement;
    // '180.01deg' because particularly in android it's rotating opposite menu open/close (not on drag though)
    // https://stackoverflow.com/a/25694077
    const iconAnim = createAnimation()
      .addElement(menuElement.querySelector('.menu__icon'))
      .fromTo(
        'transform',
        'translate(-50%, -50%)',
        'rotate(180.01deg) translate(50%, 50%)'
      );

    const line1Anim = createAnimation()
      .addElement(menuElement.querySelector('.menu__line--1'))
      .fromTo(
        'transform',
        'translate3d(0px, 0px, 0) rotate(0deg) scaleX(1.0)',
        'translate3d(6px, 2px, 0) rotate(45deg) scaleX(0.65)'
      );

    const line3Anim = createAnimation()
      .addElement(menuElement.querySelector('.menu__line--3'))
      .fromTo(
        'transform',
        'translate3d(0px, 0px, 0) rotate(0deg) scaleX(1.0)',
        'translate3d(6px, -2px, 0) rotate(-45deg) scaleX(0.65)'
      );
    const menuIconAnim = createAnimation()
      .addElement(menuElement)
      .fromTo(
        'transform',
        'translateX(0px)',
        `translateX(${this.drawerWidth}px)`
      )
      .addAnimation(iconAnim)
      .addAnimation(line1Anim)
      .addAnimation(line3Anim);

    menuController.registerAnimation('my-reveal', (menu: MenuI) =>
      revealAnimation(menu, [avatarAnim, ...drawerItems, menuIconAnim])
    );
  }

  onDrawerNavigate(page: DrawerScreen) {
    if (page.url) {
      this.activeTab = page.name;
    }
  }

  onMenuClick() {
    this.menu.toggle('main-menu');
  }
}
