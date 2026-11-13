import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DrawerPage } from './drawer.page';

describe('DrawerPage', () => {
  let component: DrawerPage;
  let fixture: ComponentFixture<DrawerPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ DrawerPage ],
      providers: [provideRouter([])]
    });

    fixture = TestBed.createComponent(DrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
