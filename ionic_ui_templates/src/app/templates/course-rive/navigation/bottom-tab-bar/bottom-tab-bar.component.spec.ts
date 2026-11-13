import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { BottomTabBarComponent } from './bottom-tab-bar.component';

describe('BottomTabBarComponent', () => {
  let component: BottomTabBarComponent;
  let fixture: ComponentFixture<BottomTabBarComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
