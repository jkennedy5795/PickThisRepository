import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPendEmpComponent } from './check-pend-emp.component';

describe('CheckPendEmpComponent', () => {
  let component: CheckPendEmpComponent;
  let fixture: ComponentFixture<CheckPendEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPendEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPendEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
