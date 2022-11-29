import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import firebase from "firebase/compat";
import { GoogleAuthProvider } from 'firebase/auth';
// import {user} from "@angular/fire/auth";
import User = firebase.User;
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private pathParamState = new BehaviorSubject<string>('');
  pathParam: Observable<string>;
  constructor(
              private auth: AngularFireAuth,
              private router:Router,
              ) {
    this.pathParam = this.pathParamState.asObservable();

    this.auth.authState.subscribe(user =>{
      if(user){
        user = user;
        // localStorage.setItem('user',JSON.stringify(this._user));
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
    this.auth.signInWithPopup(new GoogleAuthProvider())
      .then((data) => {
        if(data.user){
          // this._user = data.user;
          // localStorage.setItem('user',JSON.stringify(this._user));
          this.router.navigateByUrl('').then();
        }else{
          localStorage.setItem('user','');
        }
      }).catch((error:any) =>{});
  }

  logOut():void{
    this.auth.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login').then();
    });
  }

  // getUser():User{
  //   return user;
  // }
}
