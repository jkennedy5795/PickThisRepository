import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPastEmpComponent } from './check-past-emp.component';

describe('CheckPastEmpComponent', () => {
  let component: CheckPastEmpComponent;
  let fixture: ComponentFixture<CheckPastEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPastEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPastEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
