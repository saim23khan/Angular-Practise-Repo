import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private apiService: UserService){

  }

  userLogin(value:any):void{
    console.log(value)
    this.apiService.login(value)
  }
}
