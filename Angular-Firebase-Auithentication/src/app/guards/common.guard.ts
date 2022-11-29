import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonGuard implements CanActivate {
  constructor(private auth:AngularFireAuth,
              private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.authState.pipe(map(user=>user!=null),
      tap(value => {
        if(!value){
          console.log('log')
          this.router.navigateByUrl('login').then();
          return value;
        }else{
          console.log('log2')
          return value;
        }
      })
    );
  }

}
