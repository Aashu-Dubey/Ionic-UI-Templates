import type { OnInit } from '@angular/core';
import {
  Component,
  ElementRef,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import type { Animation } from '@ionic/angular';
import {
  AnimationController,
  IonModal,
  Platform,
  IonText,
  IonButtons,
  IonIcon,
  IonButton,
} from '@ionic/angular';
import { RiveCanvas, RiveLinearAnimation, RivePlayer } from 'ng-rive';
import { map } from 'rxjs';

import { SignInComponent } from './sign-in/sign-in.component';

@Component({
  selector: 'cr-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonButton,
    IonButtons,
    IonModal,
    IonIcon,
    FormsModule,
    RiveCanvas,
    RiveLinearAnimation,
    RivePlayer,
    SignInComponent,
  ],
})
export class OnBoardingPage implements OnInit {
  private animationCtrl = inject(AnimationController);
  platform = inject(Platform);

  readonly viewport = toSignal(
    this.platform.resize.pipe(map(() => this.getViewport())),
    { initialValue: this.getViewport() },
  );

  private readonly signInModal = viewChild(IonModal);
  private readonly containerRef = viewChild('container', { read: ElementRef });
  private readonly closeBtnRef = viewChild('closeBtn', { read: ElementRef });

  readonly closeOnBoardingEvent = output<void>();

  buttonToggle = signal(true);
  showRiveAsset = signal(false);
  showRiveBtn = signal(false);

  private getViewport() {
    return { width: this.platform.width(), height: this.platform.height() };
  }

  ngOnInit(): void {
    // Temporary solution to fix the rive asset loading issue causing "Binding Error",
    // which fails for most if rendered together, so This will load them all with a delay,
    setTimeout(() => this.showRiveAsset.set(true), 1000);
    setTimeout(() => {
      this.showRiveBtn.set(true);
      // after render one-shot animation auto-plays, so doesn't trigger animation when user clicks first time
      // this makes sure it works the first time as well
      setTimeout(() => this.resetBtnState(), 1000);
    }, 1500);
  }

  startCoursePressed(): void {
    this.buttonToggle.set(true);
    setTimeout(() => {
      this.signInModal()?.present();
      this.resetBtnState();
    }, 800);
  }

  /**
   * ng-rive has issues playing one-shot animation, so this workaround removes/adds the view after every animation
   * to reset the animation state. buttonToggle false makes sure the animation doesn't auto play after view is re-added.
   * Remove after the issue is fixed!
   */
  resetBtnState(): void {
    this.buttonToggle.set(false);
    this.showRiveBtn.set(false);
    setTimeout(() => this.showRiveBtn.set(true), 100);
  }

  onCloseOnBoarding(): void {
    this.closeOnBoardingEvent.emit();
  }

  onSignInClose(): void {
    this.signInModal()?.dismiss();
  }

  enterAnimation = (baseEl: HTMLElement): Animation => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0.5', transform: 'translateY(-100vh)' },
        { offset: 1, opacity: '1', transform: 'translateY(0vh)' },
      ]);

    const onBoardingContent = this.animationCtrl
      .create()
      .addElement(this.containerRef()?.nativeElement)
      .keyframes([
        { offset: 0, transform: 'translateY(0px)' },
        { offset: 1, transform: 'translateY(-50px)' },
      ]);

    const closeBtnAnim = this.animationCtrl
      .create()
      .addElement(this.closeBtnRef()?.nativeElement)
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

  leaveAnimation = (baseEl: HTMLElement): Animation => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
