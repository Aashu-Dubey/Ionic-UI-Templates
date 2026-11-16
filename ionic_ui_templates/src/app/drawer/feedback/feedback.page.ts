import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
  ],
})
export class FeedbackPage {}
