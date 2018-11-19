import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPendComponent } from './check-pend.component';

describe('CheckPendComponent', () => {
  let component: CheckPendComponent;
  let fixture: ComponentFixture<CheckPendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
