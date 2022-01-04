import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyCustomMaterialComponent } from './formly-custom-material.component';

describe('FormlyCustomMaterialComponent', () => {
  let component: FormlyCustomMaterialComponent;
  let fixture: ComponentFixture<FormlyCustomMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyCustomMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyCustomMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
