import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvProjectFormComponent } from './user-cv-project-form.component';

describe('UserCvProjectFormComponent', () => {
  let component: UserCvProjectFormComponent;
  let fixture: ComponentFixture<UserCvProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCvProjectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCvProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
