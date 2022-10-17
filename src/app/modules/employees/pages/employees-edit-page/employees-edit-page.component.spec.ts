import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesEditPageComponent } from './employees-edit-page.component';

describe('EmployeesEditPageComponent', () => {
  let component: EmployeesEditPageComponent;
  let fixture: ComponentFixture<EmployeesEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
