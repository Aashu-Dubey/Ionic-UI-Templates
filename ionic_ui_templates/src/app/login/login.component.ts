import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { RiveSMInput } from 'ng-rive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  onClose: any;
  constructor(public auth: AuthService, private router: Router) {}

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

  email = '';
  password = '';
  isLoading = false;


  signIn(
    success: RiveSMInput,
    failure: RiveSMInput,
    reset: RiveSMInput,
    confetti: RiveSMInput
  ) {
    this.isLoading = true;
    const isValid = this.email.trim() !== '' && this.password.trim() !== '';

    setTimeout(() => {
      isValid ? success?.fire() : failure?.fire();
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
      reset?.fire();
      isValid && confetti?.fire();
    }, 3000);

    isValid &&
      setTimeout(() => {
        this.onSignInClose();
        this.email = '';
        this.password = '';
      }, 4000);
  }

  onSignInClose() {
    this.onClose.emit();
  }
}
