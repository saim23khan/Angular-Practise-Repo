import { Component } from '@angular/core';
import {CustomStylingDirective} from "./directive/custom-styling.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Custom-Directive';
}
