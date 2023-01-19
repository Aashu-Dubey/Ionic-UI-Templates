import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RiveSMInput } from 'ng-rive';

@Component({
  selector: 'cr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  email = '';
  password = '';
  isLoading = false;

  constructor() {}

  ngOnInit() {}

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
