import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTabComponent } from './hotel-tab.component';

describe('HotelTabComponent', () => {
  let component: HotelTabComponent;
  let fixture: ComponentFixture<HotelTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
