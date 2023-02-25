import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Bootstrap-Side-Navigation';
  public isSidebarOpen = false;

  public toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
