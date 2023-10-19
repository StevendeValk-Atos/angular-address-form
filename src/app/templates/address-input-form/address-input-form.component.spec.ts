import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInputFormComponent } from './address-input-form.component';

describe('AddressInputFormComponent', () => {
  let component: AddressInputFormComponent;
  let fixture: ComponentFixture<AddressInputFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressInputFormComponent]
    });
    fixture = TestBed.createComponent(AddressInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
