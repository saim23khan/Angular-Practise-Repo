import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  });
  saveEmployee():void{
    console.log(this.formGroup.value)
  }
}
