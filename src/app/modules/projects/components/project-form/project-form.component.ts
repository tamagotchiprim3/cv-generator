import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PROJECTS_PATH } from '../../../../shared/constants/routing-path.const';
import { IProject } from '../../../../shared/interfaces/projects.interface';

@Component({
  selector: 'app-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnChanges, AfterContentChecked {
  @Input() public formData: IProject;
  @Output() private saveEvent = new EventEmitter<IProject>();

  public projectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdR: ChangeDetectorRef
  ) {
    this.projectForm = formBuilder.group({
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      teamSize: ['', Validators.required],
      description: ['', Validators.required],
      tasksPerformed: ['', Validators.required],
      projectRoles: ['', Validators.required],
      specializations: ['', Validators.required],
      responsibilities: ['', Validators.required],
    });
  }
  ngAfterContentChecked(): void {
    this.cdR.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData'].currentValue)
      this.projectForm.patchValue({
        name: this.formData.name,
        secondName: this.formData.secondName,
        startDate: this.formData.startDate,
        endDate: this.formData.endDate,
        teamSize: this.formData.teamSize,
        description: this.formData.description,
        tasksPerformed: this.formData.tasksPerformed,
        projectRoles: this.formData.projectRoles.map((item) => item.id),
        specializations: this.formData.specializations.map((item) => item.id),
        responsibilities: this.formData.responsibilities.map((item) => item.id),
      });
  }

  public cancel(): void {
    this.router.navigate([PROJECTS_PATH.path]);
  }

  public checkFormValidation(): void {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }
  }

  public submit(): void {
    this.checkFormValidation();

    const data: IProject = this.projectForm.getRawValue();
    if (this.formData && this.formData.id) {
      data.id = this.formData.id;
    }
    this.saveEvent.emit(data);
  }
}
