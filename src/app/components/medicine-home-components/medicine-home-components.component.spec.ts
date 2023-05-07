import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineHomeComponentsComponent } from './medicine-home-components.component';

describe('MedicineHomeComponentsComponent', () => {
  let component: MedicineHomeComponentsComponent;
  let fixture: ComponentFixture<MedicineHomeComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineHomeComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineHomeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
