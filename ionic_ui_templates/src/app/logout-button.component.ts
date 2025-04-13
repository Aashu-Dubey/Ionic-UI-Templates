import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';
import { callbackUri } from '../auth.config';

@Component({
  selector: 'app-logout-button',
  template: `<ion-button (click)="logout()">Log out</ion-button>`,
})
export class LogoutButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  logout() {
    this.auth
      .logout({
        logoutParams: {
          returnTo: callbackUri,
        },
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }
}
