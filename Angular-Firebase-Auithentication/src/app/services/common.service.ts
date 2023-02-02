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

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _user = this.auth.currentUser;
  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this._user = user;
        console.log(this._user);
        localStorage.setItem('user', JSON.stringify(this._user));
        this.router.navigateByUrl('/login').then();
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
