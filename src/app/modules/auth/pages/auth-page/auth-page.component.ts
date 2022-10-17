import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSpinnerCount } from 'src/app/store/app/app.selectors';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
  public spinnerCount: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectSpinnerCount).subscribe((data) => {
      this.spinnerCount = data;
    });
  }
}
