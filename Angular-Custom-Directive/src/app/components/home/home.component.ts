import { Component, Directive, Input } from '@angular/core';
import { CustomStylingDirective } from 'src/app/directive/custom-styling.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() customStylingDirective!: CustomStylingDirective;
  // @Input() class!: string;
  extraClass: string = 'custom';
  constructor() {
  }


}
