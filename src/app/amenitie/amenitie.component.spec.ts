import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitieComponent } from './amenitie.component';

describe('AmenitieComponent', () => {
  let component: AmenitieComponent;
  let fixture: ComponentFixture<AmenitieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmenitieComponent]
    });
    fixture = TestBed.createComponent(AmenitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
