import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {CommonService} from "../../services/common.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private firebaseService:CommonService,private router:Router) {
  }
  formGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  });
  loginEmployee():void{
    console.log(this.formGroup.value)
    this.firebaseService.loginWithEmail(this.formGroup);
  }

  googleLogin():void{
    this.firebaseService.google();
  }

}
