import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonRow, IonText } from '@ionic/angular';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';

import type { MenuItem} from '../../../models/side-menu';
import { menuItemsList } from '../../../models/side-menu';

@Component({
  selector: 'cr-menu-row',
  templateUrl: './menu-row.component.html',
  styleUrls: ['./menu-row.component.scss'],
  imports: [
    IonRow,
    IonText,
    RiveCanvas,
    RiveStateMachine,
    RiveSMInput,
    CommonModule,
  ],
})
export class MenuRowComponent {
  @Input() menu: MenuItem = menuItemsList[0];
  @Input() show: boolean = false;
  @Input() status: boolean = false;
  @Output() pressed = new EventEmitter();
}
