import { CommonModule } from '@angular/common';
import type { AfterViewInit, QueryList } from '@angular/core';
import {
  Component,
  ElementRef,
  ViewChildren,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  AnimationController,
  Platform,
  ToastController,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRippleEffect,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonRouterLink,
} from '@ionic/angular';

import type { Template } from '../../types/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonRippleEffect,
    IonButtons,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    CommonModule,
    FormsModule,
    RouterLink,
    IonRouterLink,
  ],
})
export class HomePage implements AfterViewInit {
  private animationCtrl = inject(AnimationController);
  private platform = inject(Platform);
  toastController = inject(ToastController);

  // ref: "https://ionicframework.com/blog/building-interactive-ionic-apps-with-gestures-and-animations/"
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef?: QueryList<ElementRef>;

  templates: Template[] = [
    {
      id: 'course-rive',
      background: 'assets/course_rive/course_rive.png',
      screenPath: '/course-rive',
    },
    {
      id: 'hotel-booking',
      background: 'assets/hotel/hotel_booking.png',
      // screenPath: 'hotel-booking',
      screenPath: undefined,
    },
    {
      id: 'fitness-app',
      background: 'assets/fitness_app/fitness_app.png',
      screenPath: undefined,
    },
    {
      id: 'design-course',
      background: 'assets/design_course/design_course.png',
      screenPath: undefined,
    },
  ];
  multiple = true;

  ngAfterViewInit(): void {
    // Workaround just to fix list flicker issue especially on Android
    setTimeout(
      () => this.initListAnimation(),
      this.platform.is('android') ? 500 : 0
    );
    // this.initListAnimation();
  }

  initListAnimation(): void {
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

  async onScreenClick(temp: Template): Promise<void> {
    if (!temp.screenPath) {
      const toast = await this.toastController.create({
        message: 'Coming soon...',
        duration: 2000,
      });
      toast.present();
    }
  }
}
