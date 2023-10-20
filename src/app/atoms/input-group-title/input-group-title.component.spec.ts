import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupTitleComponent } from './input-group-title.component';

describe('InputGroupTitleComponent', () => {
  let component: InputGroupTitleComponent;
  let fixture: ComponentFixture<InputGroupTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputGroupTitleComponent]
    });
    fixture = TestBed.createComponent(InputGroupTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
