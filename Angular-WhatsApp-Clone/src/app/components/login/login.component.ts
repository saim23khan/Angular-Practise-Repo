import { Component } from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private firebaseService:CommonService) {
  }

  login():void{
    this.firebaseService.loginWithGoogle();
  }
}
