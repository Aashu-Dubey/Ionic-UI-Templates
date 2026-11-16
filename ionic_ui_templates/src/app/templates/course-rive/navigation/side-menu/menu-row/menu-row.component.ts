import { Component, input, output } from '@angular/core';
import { IonRow, IonText } from '@ionic/angular';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';

import type { MenuItem } from '../../../models/side-menu';
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
  ],
})
export class MenuRowComponent {
  readonly menu = input<MenuItem>(menuItemsList[0]);
  readonly pressed = output<void>();
}
