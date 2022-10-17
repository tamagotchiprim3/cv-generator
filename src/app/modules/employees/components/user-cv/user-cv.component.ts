import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import jsPDF from 'jspdf';
import {
  ICreateVirtualCvResponse,
  IEducation,
  ILanguage,
} from 'src/app/shared/interfaces/employees.interface';
@Component({
  selector: 'app-cv',
  templateUrl: './user-cv.component.html',
  styleUrls: ['./user-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCvComponent implements OnChanges {
  public selectedProject = new FormControl();
  public selectedIndex: number = 0;
  public virtualCvsForm: FormGroup;

  @Input() public dataForForm: ICreateVirtualCvResponse[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store,
    private el: ElementRef
  ) {
    this.virtualCvsForm = formBuilder.group({
      virtualCvList: this.formBuilder.array(
        [
          this.formBuilder.group({
            id: [''],
            general: ['', Validators.required],
            education: this.formBuilder.array([], Validators.required),
            foreignLanguage: this.formBuilder.array([], Validators.required),
            resume: ['', Validators.required],
            projects: this.formBuilder.array([], Validators.required),
          }),
        ],
        Validators.required
      ),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataForForm'] && changes['dataForForm'].currentValue) {
      this.dataForForm.forEach((virtialCv, index) => {
        this.getVirtualCvList().push(this.newVirtualCvFormGroup());
        virtialCv.data.education.forEach((education: any) => {
          this.addEducation(index, education);
        });
        virtialCv.data.foreignLanguage.forEach((language: any) => {
          this.addLanguage(index, language);
        });
        virtialCv.data.projects.forEach((project: any) => {
          this.getFormArray('projects', index).push(new FormControl(project));
        });
        this.getVirtualCvList().at(index).patchValue({
          id: this.dataForForm[index].id,
          general: this.dataForForm[index].data.general,
          resume: this.dataForForm[index].data.resume,
        });
      });
    }
    if (changes['dataForForm'].isFirstChange()) {
      this.getVirtualCvList().removeAt(this.getVirtualCvList().length - 1);
    }
  }

  public createVirtualCv(): void {
    this.getVirtualCvList().push(this.newVirtualCvFormGroup());
    this.selectedIndex = this.getVirtualCvList().length;
  }

  public newVirtualCvFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      general: ['', Validators.required],
      education: this.formBuilder.array([], Validators.required),
      foreignLanguage: this.formBuilder.array([], Validators.required),
      resume: ['', Validators.required],
      projects: this.formBuilder.array([], Validators.required),
    });
  }

  public getAsFormGroup(item: any): FormGroup {
    return item as FormGroup;
  }

  public deleteVirtualCv({ index }: { index: number }): void {
    this.getVirtualCvList().removeAt(index);
  }

  public getVirtualCvList(): FormArray {
    return this.virtualCvsForm.get('virtualCvList') as FormArray;
  }

  public getFormArray(nameOfFormArray: string, index: number): FormArray {
    return (this.virtualCvsForm.get('virtualCvList') as FormArray)
      .at(index)
      .get(nameOfFormArray) as FormArray;
  }

  public addProject(index: number): void {
    this.getFormArray('projects', index).push(
      new FormControl(this.selectedProject.value)
    );
  }

  public addLanguage(index: number, value?: ILanguage): void {
    this.getFormArray('foreignLanguage', index).push(new FormControl(value));
  }

  public addEducation(index: number, value?: IEducation): void {
    this.getFormArray('education', index).push(new FormControl(value));
  }

  public trackByFn(index: any, item: any): any {
    return index;
  }

  public downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(this.el.nativeElement, {
      callback: (doc: { save: (arg0: string) => void }) => {
        doc.save('CV.pdf');
      },
    });
  }
}
