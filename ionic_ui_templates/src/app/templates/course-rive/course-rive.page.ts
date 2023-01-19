import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { AnimationController } from '@ionic/angular';
import { tabItemsList } from './models/tabs';

@Component({
  selector: 'cr-course-rive',
  templateUrl: './course-rive.page.html',
  styleUrls: ['./course-rive.page.scss'],
})
export class CourseRivePage implements OnInit {
  // @ViewChild(IonModal) onBoardingModal?: IonModal;

  @ViewChild('mainContent', { read: ElementRef }) mainContentRef?: ElementRef;
  @ViewChild('menuToggleBtn', { read: ElementRef })
  menuToggleBtnRef?: ElementRef;
  @ViewChild('sideMenu', { read: ElementRef }) sideMenuRef?: ElementRef;
  @ViewChild('bottomTabs', { read: ElementRef }) bottomTabRef?: ElementRef;
  @ViewChild('onBoardingBtn', { read: ElementRef })
  onBoardingBtnRef?: ElementRef;
  @ViewChild('onBoarding', { read: ElementRef }) onBoardingRef?: ElementRef;
  @ViewChild('tabWhiteBg', { read: ElementRef }) tabWhiteBgRef?: ElementRef;

  selectedTab = tabItemsList[0];
  isMenuOpen = true;
  tabItems = tabItemsList;
  showOnBoarding = false;
  showRiveMenuBtn = false; // Temporary
  avatarArr = [1, 2, 3];

  constructor(public animationCtrl: AnimationController) {}

  ngOnInit(): void {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    setTimeout(() => (this.showRiveMenuBtn = true), 1000);
  }

  showOnBoardingToggle() {
    this.showOnBoarding = !this.showOnBoarding;
    const onBoardingAnim = this.animationCtrl
      .create()
      .addElement(this.onBoardingRef?.nativeElement)
      .fromTo(
        'transform',
        'translateY(calc(-1 * (100vh + var(--ion-safe-area-bottom) + 24px)))',
        'translateY(calc(-1 * (var(--ion-safe-area-bottom) + 24px)))'
      );

    const contentViewAnim = this.animationCtrl
      .create()
      .addElement(this.mainContentRef?.nativeElement)
      .fromTo('transform', 'none', 'scale(0.92)');

    const bottomTabAnim = this.animationCtrl
      .create()
      .addElement(this.bottomTabRef?.nativeElement)
      .fromTo('transform', 'none', 'translateY(200px)');

    const tabWhiteBgAnim = this.animationCtrl
      .create()
      .addElement(this.tabWhiteBgRef?.nativeElement)
      .fromTo('opacity', '1', '0');

    const allAnim = this.animationCtrl
      .create()
      .duration(500)
      .easing('ease-in-out')
      .addAnimation([
        onBoardingAnim,
        contentViewAnim,
        bottomTabAnim,
        tabWhiteBgAnim,
      ]);

    if (this.showOnBoarding) {
      allAnim.play();
    } else {
      allAnim.direction('reverse').play();
    }
    /* if (this.showOnBoarding) {
      this.onBoardingModal?.present();
    } else {
      this.onBoardingModal?.dismiss();
    } */
  }

  /* enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .fromTo(
        'transform',
        'translateY(calc(-1 * (100vh + var(--ion-safe-area-bottom) + 24px)))',
        'translateY(calc(-1 * (var(--ion-safe-area-bottom) + 24px)))'
      );

    const contentViewAnim = this.animationCtrl
      .create()
      .addElement(this.mainContentRef?.nativeElement)
      .fromTo('transform', 'none', 'scale(0.92)');

    const bottomTabAnim = this.animationCtrl
      .create()
      .addElement(this.bottomTabRef?.nativeElement)
      .fromTo('transform', 'none', 'translateY(200px)');

    const tabWhiteBgAnim = this.animationCtrl
      .create()
      .addElement(this.tabWhiteBgRef?.nativeElement)
      .fromTo('opacity', '1', '0');

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([
        contentViewAnim,
        wrapperAnimation,
        bottomTabAnim,
        tabWhiteBgAnim,
      ]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  }; */

  onMenuToggle() {
    StatusBar.setStyle({
      style: this.isMenuOpen ? Style.Dark : Style.Light,
    }).catch(() => {});

    const contentViewAnim = this.animationCtrl
      .create()
      .addElement(this.mainContentRef?.nativeElement)
      .fromTo(
        'transform',
        'none',
        // perspective value reference: https://stackoverflow.com/a/56711034
        'scale(0.9) perspective(calc(720px + (100vw - 320px) * 7)) translateX(288px) rotateY(-30deg)'
      );

    const menuBtnAnim = this.animationCtrl
      .create()
      .addElement(this.menuToggleBtnRef?.nativeElement)
      .fromTo('transform', 'none', 'translateX(216px)');

    const sideMenuAnim = this.animationCtrl
      .create()
      .addElement(this.sideMenuRef?.nativeElement)
      .fromTo(
        'transform',
        'perspective(700px) translateX(-300px) rotateY(30deg)',
        'none'
      );

    const bottomTabAnim = this.animationCtrl
      .create()
      .addElement(this.bottomTabRef?.nativeElement)
      .fromTo('transform', 'none', 'translateY(300px)');

    const onBoardingBtnAnim = this.animationCtrl
      .create()
      .addElement(this.onBoardingBtnRef?.nativeElement)
      .fromTo('transform', 'none', 'translateX(100px)');

    const tabWhiteBgAnim = this.animationCtrl
      .create()
      .addElement(this.tabWhiteBgRef?.nativeElement)
      .fromTo('opacity', '1', '0');

    const allAnim = this.animationCtrl
      .create()
      .duration(250)
      .addAnimation([
        contentViewAnim,
        menuBtnAnim,
        sideMenuAnim,
        bottomTabAnim,
        onBoardingBtnAnim,
        tabWhiteBgAnim,
      ]);

    if (this.isMenuOpen) {
      allAnim.play();
    } else {
      allAnim.direction('reverse').play();
    }

    this.isMenuOpen = !this.isMenuOpen;
  }
}
