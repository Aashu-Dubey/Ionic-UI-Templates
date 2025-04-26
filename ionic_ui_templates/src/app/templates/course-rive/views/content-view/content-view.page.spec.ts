import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentViewPage } from './content-view.page';

describe('ContentViewPage', () => {
  let component: ContentViewPage;
  let fixture: ComponentFixture<ContentViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
