import {
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  MenuController,
  Platform,
  IonContent,
  IonMenu,
  IonSplitPane,
  IonToolbar,
  IonAvatar,
  IonLabel,
  IonList,
  IonMenuToggle,
  IonItem,
  IonFooter,
  IonRouterOutlet,
  IonRippleEffect,
} from '@ionic/angular';
import type { AnimationBuilder, MenuI, Animation } from '@ionic/core/components';
import { menuController, createAnimation } from '@ionic/core/components';
import type { Observable, Subscription} from 'rxjs';
import { filter } from 'rxjs';

import type { DrawerScreen } from '../types/drawer';

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
    .addElement(menu.contentEl!)
    .fromTo('transform', 'translateX(0px)', `translateX(${openedX})`);

  return createAnimation()
    .duration(400)
    .addAnimation(contentOpen)
    .addAnimation(anims);
};

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.page.html',
  styleUrls: ['./drawer.page.scss'],
  imports: [
    IonRouterOutlet,
    IonContent,
    IonSplitPane,
    IonMenu,
    IonMenuToggle,
    IonAvatar,
    IonLabel,
    IonList,
    IonItem,
    IonRippleEffect,
    IonToolbar,
    IonFooter,
    RouterLink,
  ],
})
export class DrawerPage {
  private router = inject(Router);
  private menu = inject(MenuController);
  platform = inject(Platform);

  private readonly userAvatarRef = viewChild('userAvatar', {
    read: ElementRef,
  });
  private readonly menuIconRef = viewChild('menuIcon', { read: ElementRef });
  private readonly drawerItemListRef = viewChildren('drawerItemList', {
    read: ElementRef,
  });

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
  readonly viewportWidth = signal(this.platform.width());
  readonly drawerWidth = computed(() => this.viewportWidth() * 0.75);
  // Hide the menu button when the split pane is enabled (desktop, tablet, ...)
  readonly isSplitPane = computed(() => this.viewportWidth() >= 992);
  readonly rowWidth = computed(() =>
    this.isSplitPane()
      ? (this.viewportWidth() * 28) / 100 - 64
      : this.drawerWidth() - 64,
  );

  readonly activeTab = signal('Home');
  windowResizeEvent?: Subscription;
  routeChangeEvent?: Subscription;

  ionViewDidEnter(): void {
    // Refresh the layout in case the window was resized while this page was cached
    this.viewportWidth.set(this.platform.width());
    this.initDrawerAnimation();

    // Page-lifecycle scoped (Ionic caches pages), not component-destroy scoped,
    // so these stay manual instead of using toSignal().
    this.windowResizeEvent?.unsubscribe();
    this.windowResizeEvent = this.platform.resize.subscribe(() => {
      this.viewportWidth.set(this.platform.width());
      this.initDrawerAnimation();
    });

    // Listen to screen changes and update 'activeTab', so that it's always in sync when we navigate on browser
    this.routeChangeEvent?.unsubscribe();
    const routerEvent = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;

    this.routeChangeEvent = routerEvent.subscribe((event) => {
      for (const page of this.appPages) {
        if (event.url === page.url) {
          this.activeTab.set(page.name);
        }
      }
    });
  }

  ionViewWillLeave(): void {
    this.windowResizeEvent?.unsubscribe();
    this.routeChangeEvent?.unsubscribe();
  }

  initDrawerAnimation(): void {
    // Avatar animation
    const avatarAnim = createAnimation()
      .addElement(this.userAvatarRef()?.nativeElement)
      // .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
      .fromTo('transform', 'rotate(36deg) scale(0.8)', 'rotate(0deg) scale(1)');

    // Drawer Items active background
    const drawerItems: Animation[] = [];
    const itemRefArray = this.drawerItemListRef();
    for (const itemRef of itemRefArray) {
      const element = itemRef.nativeElement;
      const drawerItemAnim = createAnimation()
        .addElement(element.querySelector('.drawerInnerItem'))
        .fromTo(
          'transform',
          `translateX(-${this.rowWidth()}px)`,
          'translateX(0px)'
        );
      drawerItems.push(drawerItemAnim);
    }

    // Menu -> arrow icon animation
    const menuElement = this.menuIconRef()?.nativeElement;
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
        `translateX(${this.drawerWidth()}px)`
      )
      .addAnimation(iconAnim)
      .addAnimation(line1Anim)
      .addAnimation(line3Anim);

    menuController.registerAnimation('my-reveal', (menu: MenuI) =>
      revealAnimation(menu, [avatarAnim, ...drawerItems, menuIconAnim])
    );
  }

  onDrawerNavigate(page: DrawerScreen): void {
    if (page.url) {
      this.activeTab.set(page.name);
    }
  }

  onMenuClick(): void {
    this.menu.toggle('main-menu');
  }
}
