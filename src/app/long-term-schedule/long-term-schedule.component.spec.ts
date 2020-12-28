import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermScheduleComponent } from './long-term-schedule.component';

describe('LongTermScheduleComponent', () => {
  let component: LongTermScheduleComponent;
  let fixture: ComponentFixture<LongTermScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongTermScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
