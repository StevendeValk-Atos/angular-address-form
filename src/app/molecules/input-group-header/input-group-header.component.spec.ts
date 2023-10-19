import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupHeaderComponent } from './input-group-header.component';

describe('InputGroupHeaderComponent', () => {
  let component: InputGroupHeaderComponent;
  let fixture: ComponentFixture<InputGroupHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputGroupHeaderComponent]
    });
    fixture = TestBed.createComponent(InputGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
