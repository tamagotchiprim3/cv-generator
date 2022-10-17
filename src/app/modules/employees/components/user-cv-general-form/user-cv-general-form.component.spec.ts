import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvGeneralFormComponent } from './user-cv-general-form.component';

describe('UserCvGeneralFormComponent', () => {
  let component: UserCvGeneralFormComponent;
  let fixture: ComponentFixture<UserCvGeneralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCvGeneralFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCvGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
