import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  // showFlag = true;

  shouldShowFlag(url: string): boolean {
    // check if the URL matches a specific pattern where the flag should be hidden
    console.log(url);
    if (url.includes('http://localhost:56370/about')) {
      console.log('hide flag');
      console.log('hide flag');
      return false;
    }
    console.log('show flag');
    // otherwise, show the flag
    return true;
  }
}
