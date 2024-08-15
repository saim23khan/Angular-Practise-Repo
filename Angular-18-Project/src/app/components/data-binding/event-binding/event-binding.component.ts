import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  greeting: string = 'Hello';
  onClick(){
    this.greeting = 'Welcome to Angular 8';
  }
}
