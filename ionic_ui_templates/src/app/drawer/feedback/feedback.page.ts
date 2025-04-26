import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonImg,
  IonLabel,
  IonTextarea,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  imports: [
    IonContent,
    IonImg,
    IonLabel,
    IonTextarea,
    IonButton,
    CommonModule,
    FormsModule,
  ],
})
export class FeedbackPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
