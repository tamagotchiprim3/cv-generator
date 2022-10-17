import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectInputComponent } from './select-input.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectInputComponent],
  imports: [CommonModule, NzSelectModule, ReactiveFormsModule],
  exports: [SelectInputComponent],
})
export class SelectInputModule {}
