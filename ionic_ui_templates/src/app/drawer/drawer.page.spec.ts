import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerPage } from './drawer.page';

describe('DrawerPage', () => {
  let component: DrawerPage;
  let fixture: ComponentFixture<DrawerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
