import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseRivePage } from './course-rive.page';

describe('CourseRivePage', () => {
  let component: CourseRivePage;
  let fixture: ComponentFixture<CourseRivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
