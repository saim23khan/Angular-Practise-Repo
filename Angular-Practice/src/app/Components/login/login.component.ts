import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customeLogin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string='check';
  num:number = 12;
  employess: any[] = [typeof('213'),typeof(223),typeof(true),typeof(34.44)];
  name:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getName(num: number): string {
    return num > 10 ? this.title : 'Less';
  }

  getArr(arr: any[]): any[] {
    return arr;
  }

  onClick():void {
    alert('clicked');
  }

  numChnage():void {
    this.num = 0;
  }

  numIncrease():void {
    this.num = 12;
  }

  onChange(str:string):void {
    this.name = str;
  }
}
