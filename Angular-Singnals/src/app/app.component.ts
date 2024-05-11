import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Singnals';

  counter = signal(0);


  increase(){
    this.counter.update(val => val + 1)
  }

  decrease(){
    this.counter.update(val => val - 1)
  }

  reset(){
    this.counter.set(0)
  }
}
