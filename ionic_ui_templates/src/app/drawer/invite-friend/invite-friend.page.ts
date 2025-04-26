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
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.page.html',
  styleUrls: ['./invite-friend.page.scss'],
  imports: [IonContent, IonLabel, IonButton, IonImg, CommonModule, FormsModule],
})
export class InviteFriendPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
