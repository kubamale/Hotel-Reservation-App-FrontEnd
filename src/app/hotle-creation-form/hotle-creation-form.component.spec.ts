import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotleCreationFormComponent } from './hotle-creation-form.component';

describe('HotleCreationFormComponent', () => {
  let component: HotleCreationFormComponent;
  let fixture: ComponentFixture<HotleCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotleCreationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotleCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
