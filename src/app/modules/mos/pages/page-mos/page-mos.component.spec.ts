import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMosComponent } from './page-mos.component';

describe('PageMosComponent', () => {
  let component: PageMosComponent;
  let fixture: ComponentFixture<PageMosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
