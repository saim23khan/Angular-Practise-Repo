import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-elseif',
  standalone: true,
  imports: [],
  templateUrl: './if-else-elseif.component.html',
  styleUrl: './if-else-elseif.component.scss'
})
export class IfElseElseifComponent {
  IsLoggedIn = 0;

  detect(val:any){
    this.IsLoggedIn = val;
  }
}
