import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  authState, onAuthStateChanged
} from "@angular/fire/auth";
import firebase from "firebase/compat/app";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _user = this.auth.currentUser;
  constructor(private auth: Auth, private router: Router,private userServices:UserService) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this._user = user;
        this.userServices.user = this._user;
        this.router.navigateByUrl('').then();
      } else {
        localStorage.setItem('user', '');
      }
    })
  }

  public loginWithEmail(formGroup: FormGroup): void {
    signInWithEmailAndPassword(
      this.auth,
      formGroup.value.email,
      formGroup.value.password)
      .then((value: any) => {
        alert('done');
        this.router.navigate(['']);
      }).catch((error: any) => {
        alert(error);
      });
  }

  public google(): void {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then(result => {
      console.log(result.user);
      this.router.navigateByUrl('').then();
      alert('SignIn With Google');
      this.userServices.user = result.user;
    }).catch(error => {
      alert(error);
    });
  }

  public logout(): void {
    this.auth.signOut().then(() => {
      alert('SignOut');
      this.router.navigateByUrl('/login').then();
    }).catch(error => {
      alert(error);
    })
  }

}
