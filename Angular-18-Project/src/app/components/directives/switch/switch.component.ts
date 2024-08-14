import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  IsLoggedIn = 0;

  detect(val:any){
    console.log(val);
    this.IsLoggedIn = parseInt(val);
  }
}
