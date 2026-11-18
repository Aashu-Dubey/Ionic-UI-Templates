import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area';
import { Component, inject, viewChild } from '@angular/core';
import { App } from '@capacitor/app';
import { StatusBar } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private platform = inject(Platform);

  private readonly routerOutlet = viewChild.required(IonRouterOutlet);

  constructor() {
    SafeAreaController.injectCSSVariables();
    // Doesn't work on Android 15+, as they has edge-to-edge
    StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});

    // By default Ionic doesn't close app on back click, so we handle that here
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet().canGoBack()) {
        App.exitApp();
      }
    });
  }
}
