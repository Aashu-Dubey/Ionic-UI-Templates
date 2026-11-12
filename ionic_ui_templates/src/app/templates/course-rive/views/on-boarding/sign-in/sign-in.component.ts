import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonText,
} from '@ionic/angular';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';

@Component({
  selector: 'cr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [
    IonText,
    IonItem,
    IonInput,
    IonIcon,
    IonRow,
    IonButton,
    FormsModule,
    RiveCanvas,
    RiveStateMachine,
    RiveSMInput,
  ],
})
export class SignInComponent  {
  @Output() closeClicked = new EventEmitter();

  email = signal('');
  password = signal('');
  isLoading = signal(false);

  signIn(
    success: RiveSMInput,
    failure: RiveSMInput,
    reset: RiveSMInput,
    confetti: RiveSMInput
  ): void {
    this.isLoading.set(true);
    const isValid = this.email().trim() !== '' && this.password().trim() !== '';

    setTimeout(() => {
      if (isValid) {
        success?.fire();
      } else {
        failure?.fire();
      }
    }, 1000);

    setTimeout(() => {
      this.isLoading.set(false);
      reset?.fire();
      if (isValid) {
        confetti?.fire();
      }
    }, 3000);

    if (isValid) {
      setTimeout(() => {
        this.onSignInClose();
        this.email.set('');
        this.password.set('');
      }, 4000);
    }
  }

  onSignInClose(): void {
    this.closeClicked.emit();
  }
}
