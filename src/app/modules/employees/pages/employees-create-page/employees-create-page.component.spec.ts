import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCreatePageComponent } from './employees-create-page.component';

describe('EmployeesCreatePageComponent', () => {
  let component: EmployeesCreatePageComponent;
  let fixture: ComponentFixture<EmployeesCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
