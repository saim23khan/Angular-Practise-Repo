import { Component, ViewEncapsulation } from '@angular/core';
import { ChildChildComponent } from "../child-child/child-child.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ChildChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent {

}
