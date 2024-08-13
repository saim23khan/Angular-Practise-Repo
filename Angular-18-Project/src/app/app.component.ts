import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostlistnerComponent } from './components/hostlistner/hostlistner.component';
import { ParentComponent } from './components/encapsulation/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HostlistnerComponent,ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-18-Project';
}
