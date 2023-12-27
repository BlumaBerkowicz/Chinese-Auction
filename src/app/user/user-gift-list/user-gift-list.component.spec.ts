import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGiftListComponent } from './user-gift-list.component';

describe('UserGiftListComponent', () => {
  let component: UserGiftListComponent;
  let fixture: ComponentFixture<UserGiftListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGiftListComponent]
    });
    fixture = TestBed.createComponent(UserGiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
