import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReimComponent } from './new-reim.component';

describe('NewReimComponent', () => {
  let component: NewReimComponent;
  let fixture: ComponentFixture<NewReimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
