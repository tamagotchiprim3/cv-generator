import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvLanguagesFormComponent } from './user-cv-languages-form.component';

describe('UserCvLanguagesFormComponent', () => {
  let component: UserCvLanguagesFormComponent;
  let fixture: ComponentFixture<UserCvLanguagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCvLanguagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCvLanguagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
