import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  isLoggedIn():boolean{
    return localStorage.getItem("login") != null;
  }

  HaveRole(route:any){
    const role = localStorage.getItem('role');
    if(role=='admin'){
      return true;
    }else{
      if(route=='contact'){
        return true;
      }
      return false;
    }
  }
}
