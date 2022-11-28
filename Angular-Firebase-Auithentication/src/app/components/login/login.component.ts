import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  });
  loginEmployee():void{
    console.log(this.formGroup.value)
  }
}
