import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMosComponent } from './nav-mos.component';

describe('NavMosComponent', () => {
  let component: NavMosComponent;
  let fixture: ComponentFixture<NavMosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
