import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private pathParamState = new BehaviorSubject<string>('');
  pathParam: Observable<string>

  constructor(private angularFireStore: AngularFirestore,
              private auth: AngularFireAuth
              ) {
    this.pathParam = this.pathParamState.asObservable();
  }
}
