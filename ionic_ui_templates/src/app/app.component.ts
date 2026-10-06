import { Component, ViewChild, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { StatusBar } from '@capacitor/status-bar';
import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private platform = inject(Platform);

  // https://github.com/ionic-team/ionic-framework/issues/21630#issuecomment-683007162
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet?: IonRouterOutlet;

  constructor() {
    SafeAreaController.injectCSSVariables();
    // Doesn't work on Android 15+, as they has edge-to-edge
    StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});

    // By default Ionic doesn't close app on back click, so we handle that here
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet?.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
