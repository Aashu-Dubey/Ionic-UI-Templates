import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}
  user$ = this.auth.isAuthenticated$.pipe(switchMap(() => this.auth.user$));

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/drawer']);
      }
    });
  }

  login() {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        },
      })
      .subscribe();
  }
}
