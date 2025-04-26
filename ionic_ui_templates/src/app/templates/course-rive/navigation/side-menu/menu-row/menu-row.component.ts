import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonRow, IonText } from '@ionic/angular/standalone';
import { RiveCanvas, RiveSMInput, RiveStateMachine } from 'ng-rive';
import { MenuItem, menuItemsList } from '../../../models/side-menu';

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
export class MenuRowComponent implements OnInit {
  @Input() menu: MenuItem = menuItemsList[0];
  @Output() onPress = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
