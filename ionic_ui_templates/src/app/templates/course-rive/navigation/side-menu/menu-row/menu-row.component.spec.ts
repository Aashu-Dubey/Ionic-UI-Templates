import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { MenuRowComponent } from './menu-row.component';

describe('MenuRowComponent', () => {
  let component: MenuRowComponent;
  let fixture: ComponentFixture<MenuRowComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
