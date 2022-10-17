import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvEducationFormComponent } from './user-cv-education-form.component';

describe('UserCvEducationFormComponent', () => {
  let component: UserCvEducationFormComponent;
  let fixture: ComponentFixture<UserCvEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCvEducationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCvEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
