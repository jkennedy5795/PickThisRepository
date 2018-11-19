import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPastComponent } from './check-past.component';

describe('CheckPastComponent', () => {
  let component: CheckPastComponent;
  let fixture: ComponentFixture<CheckPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
