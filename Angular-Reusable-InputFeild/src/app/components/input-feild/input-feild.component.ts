import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-feild',
  templateUrl: './input-feild.component.html',
  styleUrls: ['./input-feild.component.scss']
})
export class InputFeildComponent {
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() formGroup!: FormGroup;
  @Input() type!: string;

  public constructor() { }
}
