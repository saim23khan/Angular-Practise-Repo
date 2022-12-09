import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  authError: any;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.auth._eventAuthError.subscribe(data => {
      this.authError = data;
    })
  }

  createUser(frm: any){
    this.auth.createUser(frm.value);
  }

  NavigateToLogin(){
    this.router.navigate(['login']);
  }
}
