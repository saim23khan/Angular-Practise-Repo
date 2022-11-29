import { Component } from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private firebaseService:CommonService) {
  }
  logOut():void{
    this.firebaseService.logout()
  }
}
