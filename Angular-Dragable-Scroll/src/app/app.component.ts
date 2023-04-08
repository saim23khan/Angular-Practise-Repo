import { Component } from '@angular/core';
import { DragService } from './drag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Dragable-Scroll';
  constructor(public drag:DragService) { }
}
