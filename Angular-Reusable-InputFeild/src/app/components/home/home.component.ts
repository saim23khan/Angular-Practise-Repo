import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public constructor() { }
  formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    //required: true,
    email: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl(''),
  })

  submit(): void {
    console.log(this.formGroup.value)
  }
}
