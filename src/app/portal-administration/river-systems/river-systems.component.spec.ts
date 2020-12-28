import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverSystemsComponent } from './river-systems.component';

describe('RiverSystemsComponent', () => {
  let component: RiverSystemsComponent;
  let fixture: ComponentFixture<RiverSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
