import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicFormationComponent } from './academic-formation.component';

describe('AcademicFormationComponent', () => {
  let component: AcademicFormationComponent;
  let fixture: ComponentFixture<AcademicFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
