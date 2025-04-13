import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-score-modal',
  templateUrl: './user-score-modal.component.html',
  styleUrls: ['./user-score-modal.component.scss'],
})
export class UserScoreModalComponent {
  @Input() userScore!: number;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
