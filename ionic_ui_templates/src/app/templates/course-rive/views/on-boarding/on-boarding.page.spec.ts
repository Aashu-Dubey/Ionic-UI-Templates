import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnBoardingPage } from './on-boarding.page';

describe('OnBoardingPage', () => {
  let component: OnBoardingPage;
  let fixture: ComponentFixture<OnBoardingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
