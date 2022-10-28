import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigaterService {

  constructor(private router:Router) { }

   //navigation functions
   public navigater(url:string):void{
    this.router.navigate([url]);
  }
}
