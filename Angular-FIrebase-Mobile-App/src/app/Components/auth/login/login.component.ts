import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError: any;
  constructor(
    private auth: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.auth._eventAuthError.subscribe(data => {
      this.authError = data;
    })
  }

  LoginUser(frm:any){
    this.auth.loginUser(frm.value.email, frm.value.password);
  }

  NavigateToRegister(){
    this.router.navigate(['register']);
  }

}
