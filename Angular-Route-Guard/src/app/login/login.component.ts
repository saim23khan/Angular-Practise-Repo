import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewChecked {

  @ViewChild('myForm') myForm!: ElementRef;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    
  }

  onSubmitForm(value:any):void{
    localStorage.setItem('login',value);
    localStorage.setItem('role',value.role);
    this.route.navigate([""]);
  }

}
