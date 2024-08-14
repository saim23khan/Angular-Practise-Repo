import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {
  employees:any[] = [
    {id:1,name: 'John', age: 25},
    {id:2,name: 'Smith', age: 30},
    {id:3,name: 'David', age: 35},
    {id:4,name: 'Rohan', age: 40}
  ];
  constructor() { 
    // this.employees = []
  }
}
