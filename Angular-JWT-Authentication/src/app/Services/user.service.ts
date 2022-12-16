import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiKey:string = "http://localhost:5000/login";
  private apiKeyProfile:string = "http://localhost:5000/profile";

  constructor(private http: HttpClient,private router:Router) { }

  login(data:any){
    this.http.post(this.apiKey,data).subscribe((result:any)=>{
      localStorage.setItem("token",result.token)
      console.log(result)
      this.router.navigateByUrl('/profile')
    });
  }

  profile(){
    let headers = new HttpHeaders().set("Authorization", `bearer ${localStorage.getItem('token')}`)
    this.http.post(this.apiKeyProfile,{},{headers}).subscribe((result:any)=>{
      console.log(result)
    });
  }

  isUserLogedIn():boolean{
    const token = localStorage.getItem("token")
    return token !== null ? true : false;
  }
}
