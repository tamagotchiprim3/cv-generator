import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSelectInputComponent } from './tree-select-input.component';

describe('TreeSelectInputComponent', () => {
  let component: TreeSelectInputComponent;
  let fixture: ComponentFixture<TreeSelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeSelectInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
