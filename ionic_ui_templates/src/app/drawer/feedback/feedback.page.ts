import { Component } from '@angular/core';
import { IonButton, IonContent, IonLabel, IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  imports: [
    IonContent,
    IonLabel,
    IonTextarea,
    IonButton,
  ],
})
export class FeedbackPage {}
