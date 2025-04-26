import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonImg,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  imports: [IonContent, IonImg, IonLabel, IonButton, CommonModule, FormsModule],
})
export class HelpPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
