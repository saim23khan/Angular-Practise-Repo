import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  currentRoute: string = '';
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  // constructor(private router: Router) {
  //   router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe((event:NavigationEnd) => {
  //     this.currentRoute = event.url;
  //   });
  // }
  // showFlag = true;
  //list of url
  urlList = [
    'about'
  ];
  checkUrl():boolean{
    for (let i = 0; i < this.urlList.length; i++) {
      if (this.currentRoute.includes(this.urlList[i])) {
        return false;
      }
    }
    return true;
  }
  // shouldShowFlag(url: string): boolean {
  //   // check if the URL matches a specific pattern where the flag should be hidden
  //   console.log(url);
  //   if (url.includes('http://localhost:56370/about')) {
  //     console.log('hide flag');
  //     console.log('hide flag');
  //     return false;
  //   }
  //   console.log('show flag');
  //   // otherwise, show the flag
  //   return true;
  // }
}
