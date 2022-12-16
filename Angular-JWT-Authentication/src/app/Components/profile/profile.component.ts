import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private apiService:UserService,private router:Router) {
    
  }

  ngOnInit(){
    this.apiService.profile()
  }

  logOut():void{
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"))
    this.router.navigateByUrl("")
  }
}
