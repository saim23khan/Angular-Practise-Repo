import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  onlyOdd: boolean = false;
  numbers: number[] = [1, 2, 3, 4, 5];
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4];
}
