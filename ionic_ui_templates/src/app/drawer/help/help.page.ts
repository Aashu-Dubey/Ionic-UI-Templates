import { Component } from '@angular/core';
import { IonButton, IonContent, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  imports: [IonContent, IonLabel, IonButton],
})
export class HelpPage {}
