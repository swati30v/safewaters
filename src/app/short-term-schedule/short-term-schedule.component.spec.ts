import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermScheduleComponent } from './short-term-schedule.component';

describe('ShortTermScheduleComponent', () => {
  let component: ShortTermScheduleComponent;
  let fixture: ComponentFixture<ShortTermScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTermScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTermScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
