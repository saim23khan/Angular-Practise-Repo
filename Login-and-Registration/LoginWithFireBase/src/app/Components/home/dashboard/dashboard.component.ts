import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: firebase.User | any;  

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user ;
    })
  }

  //logout function calling from authentication.service
  
  Logout(){
    this.auth.Logout();
    this.router.navigate(['/']);
  }
}
