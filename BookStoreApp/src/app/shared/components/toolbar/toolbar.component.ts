import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //navigation functions
  public navigater(url:string):void{
    this.router.navigate([url]);
  }
}
