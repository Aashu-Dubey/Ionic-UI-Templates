import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-login-button',
  template: `<ion-button (click)="login()">Login</ion-button>`,
})
export class LoginButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {}

  login() {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }
}
