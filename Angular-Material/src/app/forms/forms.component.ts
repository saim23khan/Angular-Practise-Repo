import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    var a  =  this.formGroup.controls[this.controlName].value;
    var b = this.formGroup.get(this.controlName)?.value;
    console.log(a + " " + b);
  }
}
