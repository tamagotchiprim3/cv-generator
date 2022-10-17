import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS_PATH } from 'src/app/shared/constants/routing-path.const';
import { IFormData } from 'src/app/shared/interfaces/auth.interface';
import { loginAction } from 'src/app/store/auth/auth.actions';
import { selectAuthData } from 'src/app/store/auth/auth.selectors';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  public authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.authForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public checkFormValidation(): void {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
  }

  public submit(): void {
    this.checkFormValidation();

    const data: IFormData = this.authForm.getRawValue();
    this.store.dispatch(loginAction({ data }));
    this.store.select(selectAuthData).subscribe(() => {
      this.router.navigate([PROJECTS_PATH.path]);
    });
  }
}
