import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import StatusBarAndroid from './myPlugin/StatusBarAndroid';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // https://github.com/ionic-team/ionic-framework/issues/21630#issuecomment-683007162
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet?: IonRouterOutlet;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.handleStatusBar();
    });

    // By default Ionic doesn't close app on back click, so we handle that here
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet?.canGoBack()) {
        App.exitApp();
      }
    });
  }

  /* Overlay Status bar and get it's height (mainly for Android) */
  async handleStatusBar() {
    const isAndroid = this.platform.is('android');
    const el1 = window.getComputedStyle(document.body);
    const safeArea = el1.getPropertyValue('--ion-safe-area-top');

    let statusBarHeight = '24px';
    if (isAndroid) {
      const { height } = await StatusBarAndroid.getHeight();
      statusBarHeight = `${height / window.devicePixelRatio}px`;
    }

    // const elStyle = document.querySelector<HTMLElement>(':root').style;
    const elStyle = document.documentElement.style;
    const barHeight = isAndroid ? statusBarHeight : safeArea;
    elStyle.setProperty('--status-bar-height', barHeight);

    StatusBar.setOverlaysWebView({ overlay: true });
  }
}
