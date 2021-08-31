import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private eventAuthError = new BehaviorSubject<string>("");
  _eventAuthError = this.eventAuthError.asObservable();
  newUser: any;

  constructor(
    //variable initialize for auth 
    private angularFireAuth: AngularFireAuth,
    //variable initialize for Firestore connection
    private database: AngularFirestore,
    //variable initialize for routing for this component template
    private router: Router,
  ) { }

  //retrun user current state
  getUserState(){
    return this.angularFireAuth.authState;
  }
  
  createUser(user:any){
    console.log(user);
    this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then( userInformations => {
      this.newUser = user;
      console.log(userInformations);
      userInformations.user?.updateProfile({
        displayName: user.firstname + '' + user.lastname,
      });

      this.insertUserData(userInformations)
      .then(()=>{
        this.router.navigate(['/dashboard']);
      });
    })
    .catch(error => {
      this.eventAuthError.next(error);
    })
  }

  //store user data from register form
  insertUserData(userInformations: firebase.default.auth.UserCredential){
    return this.database.doc(`RegisterdUsers/${userInformations.user?.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstname,
      lastname: this.newUser.lastname,
      telephone: this.newUser.telephone,
      gender: this.newUser.gender,
      password: this.newUser.password,
    })
  }

  //login method
  loginUser(email: string, password: string){
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .catch(error =>{
      this.eventAuthError.next(error);
    })
    .then(userInformations => {
      if(userInformations){
        this.router.navigate(['dashboard']);
      }
    })
  }
  //logout the application
  Logout() {
    return this.angularFireAuth.signOut();
  }
}
