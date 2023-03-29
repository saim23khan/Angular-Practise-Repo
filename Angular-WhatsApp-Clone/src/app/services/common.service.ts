import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _user = this.auth.currentUser;
  private pathParamState = new BehaviorSubject<string>('');
  pathParam: Observable<string>;
  constructor(
              private auth: Auth,
              private router:Router,
              ) {
    this.pathParam = this.pathParamState.asObservable();

    onAuthStateChanged(auth,(user)=>{
      if(user){
        this._user = user;
        console.log(this._user);
        localStorage.setItem('user',JSON.stringify(this._user));
        this.router.navigateByUrl('/login').then();
      }else{
        localStorage.setItem('user','');
      }
    })
  }

  updatePathParamState(newPathParam: string):void{
    this.pathParamState.next(newPathParam);
  }

  loginWithGoogle():void{
    signInWithPopup(this.auth,new GoogleAuthProvider()).then((result:any)=>{
      console.log(result.user);
      alert('SignIn With Google');
      this.router.navigateByUrl('').then();
    }).catch((error:any)=>{
      alert(error);
    });
  }

  logOut():void{
    this.auth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login').then();
    });
  }

  // getUser():boolean{
  //   return this._user.;
  // }
}

export interface RoomData{
  name: String,
  id?: string
}
