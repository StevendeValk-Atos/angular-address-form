import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputGroupComponent } from './address-input-group.component';

describe('AddressInputGroupComponent', () => {
  let component: AddressInputGroupComponent;
  let fixture: ComponentFixture<AddressInputGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressInputGroupComponent]
    });
    fixture = TestBed.createComponent(AddressInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
