import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTheaterComponent } from './list-theater.component';

describe('ListTheaterComponent', () => {
  let component: ListTheaterComponent;
  let fixture: ComponentFixture<ListTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
