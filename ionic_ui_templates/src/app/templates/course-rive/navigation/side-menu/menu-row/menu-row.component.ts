import { Component, input, output } from '@angular/core';
import { IonRow, IonText } from '@ionic/angular';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';

import type { MenuItem } from '../../../models/side-menu';
import { DEFAULT_MENU_ID } from '../../../models/side-menu';

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
  readonly defaultMenuId = DEFAULT_MENU_ID;
  readonly menu = input.required<MenuItem>();
  readonly pressed = output<void>();
}
