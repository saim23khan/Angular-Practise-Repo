import { Component, OnInit } from '@angular/core';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(public service:MasterService){}
  title = 'Angular-Route-Guard';

  logout(){
    if(this.service.isLoggedIn()){
      localStorage.removeItem('login');
      localStorage.removeItem('role');
    }else{
      alert('please login');
    }
  }
}
