import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../services/common.service";
import { UserService } from 'src/app/services/user.service';
import { UserCredential } from 'firebase/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user?:any;
  constructor(private firebaseService:CommonService,private userService:UserService) {
  }
  ngOnInit(): void {
    this.user = this.userService.user;
  }
  logOut():void{
    this.firebaseService.logout()
  }
}
