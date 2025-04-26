import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteFriendPage } from './invite-friend.page';

describe('InviteFriendPage', () => {
  let component: InviteFriendPage;
  let fixture: ComponentFixture<InviteFriendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
