import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPrincComponent } from './dash-princ.component';

describe('DashPrincComponent', () => {
  let component: DashPrincComponent;
  let fixture: ComponentFixture<DashPrincComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPrincComponent]
    });
    fixture = TestBed.createComponent(DashPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
