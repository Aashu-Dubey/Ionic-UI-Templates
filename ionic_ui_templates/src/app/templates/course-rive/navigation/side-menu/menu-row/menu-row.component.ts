import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem, menuItemsList } from '../../../models/side-menu';

@Component({
  selector: 'cr-menu-row',
  templateUrl: './menu-row.component.html',
  styleUrls: ['./menu-row.component.scss'],
})
export class MenuRowComponent implements OnInit {
  @Input() menu: MenuItem = menuItemsList[0];
  @Output() onPress = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
