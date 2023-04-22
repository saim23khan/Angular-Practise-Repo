import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reusable-chips',
  templateUrl: './reusable-chips.component.html',
  styleUrls: ['./reusable-chips.component.scss']
})
export class ReusableChipsComponent {
  @Input() items!:string[];
  @Input() controlName!:string;
  @Input() formGroup!:FormGroup;

}
