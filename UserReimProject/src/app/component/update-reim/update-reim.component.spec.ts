import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReimComponent } from './update-reim.component';

describe('UpdateReimComponent', () => {
  let component: UpdateReimComponent;
  let fixture: ComponentFixture<UpdateReimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
