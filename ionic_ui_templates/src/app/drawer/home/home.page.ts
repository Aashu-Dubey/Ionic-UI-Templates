import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationController, Platform, ToastController } from '@ionic/angular';
import { Template } from 'src/app/types/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  // ref: "https://ionicframework.com/blog/building-interactive-ionic-apps-with-gestures-and-animations/"
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef?: QueryList<ElementRef>;

  templates: Template[] = [
    {
      id: 0,
      background: 'assets/hotel/hotel_booking.png',
      // screenPath: 'hotel-booking',
      screenPath: undefined,
    },
    {
      id: 1,
      background: 'assets/fitness_app/fitness_app.png',
      screenPath: undefined,
    },
    {
      id: 2,
      background: 'assets/design_course/design_course.png',
      screenPath: undefined,
    },
  ];
  multiple = true;

  constructor(
    public toastController: ToastController,
    private animationCtrl: AnimationController,
    private platform: Platform
  ) {}

  ngAfterViewInit() {
    // Workaround just to fix list flicker issue especially on Android
    setTimeout(
      () => this.initListAnimation(),
      this.platform.is('android') ? 500 : 0
    );
    // this.initListAnimation();
  }

  initListAnimation() {
    const itemRefArray = this.templateListRef?.toArray();
    for (let i = 0; i < itemRefArray!.length; i++) {
      const element = itemRefArray![i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }

  async onScreenClick(temp: Template) {
    if (!temp.screenPath) {
      const toast = await this.toastController.create({
        message: 'Coming soon...',
        duration: 2000,
      });
      toast.present();
    }
  }

  listKeyExtractor(i: number, screen: Template): number {
    return screen.id;
  }
}
