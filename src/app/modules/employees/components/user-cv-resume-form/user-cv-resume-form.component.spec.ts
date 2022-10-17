import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvResumeFormComponent } from './user-cv-resume-form.component';

describe('UserCvResumeFormComponent', () => {
  let component: UserCvResumeFormComponent;
  let fixture: ComponentFixture<UserCvResumeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCvResumeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCvResumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
