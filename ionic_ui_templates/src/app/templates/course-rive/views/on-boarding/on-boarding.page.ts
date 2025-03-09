import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AnimationController, IonModal, Platform } from '@ionic/angular';

@Component({
  selector: 'cr-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
  standalone: false,
})
export class OnBoardingPage implements OnInit {
  @ViewChild(IonModal) signInModal?: IonModal;
  @ViewChild('container', { read: ElementRef }) containerRef?: ElementRef;
  @ViewChild('closeBtn', { read: ElementRef }) closeBtnRef?: ElementRef;

  @Output() closeOnBoardingEvent = new EventEmitter();

  buttonToggle = true;
  showRiveAsset = false;
  showRiveBtn = false;

  constructor(
    public platform: Platform,
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    setTimeout(() => (this.showRiveAsset = true), 1000);
    setTimeout(() => {
      this.showRiveBtn = true;
      // after render one-shot animation auto-plays, so doesn't trigger animation when user clicks first time
      // this makes sure it works the first time as well
      setTimeout(() => (this.resetBtnState()), 1000);
    }, 1500);
  }

  startCoursePressed() {
    this.buttonToggle = true;
    setTimeout(() => {
      this.signInModal?.present();
      this.resetBtnState();
    }, 800);
  }

  /**
   * ng-rive has issues playing one-shot animation, so this workaround removes/adds the view after every animation
   * to reset the animation state. buttonToggle false makes sure the animation doesn't auto play after view is re-added.
   * Remove after the issue is fixed!
   */
  resetBtnState() {
    this.buttonToggle = false;
    this.showRiveBtn = false;
    setTimeout(() => (this.showRiveBtn = true), 100);
  }

  onCloseOnBoarding() {
    this.closeOnBoardingEvent.emit();
  }

  onSignInClose() {
    this.signInModal?.dismiss();
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;
    const containerEl = this.containerRef?.nativeElement;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0.5', transform: 'translateY(-100vh)' },
        { offset: 1, opacity: '1', transform: 'translateY(0vh)' },
      ]);

    const onBoardingContent = this.animationCtrl
      .create()
      .addElement(containerEl!)
      .keyframes([
        { offset: 0, transform: 'translateY(0px)' },
        { offset: 1, transform: 'translateY(-50px)' },
      ]);
    const closeBtnAnim = this.animationCtrl
      .create()
      .addElement(this.closeBtnRef?.nativeElement!)
      .fromTo('transform', 'translateY(0)', 'translateY(-150px)');

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(500)
      .addAnimation([
        backdropAnimation,
        wrapperAnimation,
        onBoardingContent,
        closeBtnAnim,
      ]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
