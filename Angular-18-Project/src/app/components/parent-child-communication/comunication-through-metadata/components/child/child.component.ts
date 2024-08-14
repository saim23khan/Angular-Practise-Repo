import { Component, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  inputs:['pKey'],
  outputs:['childEmitter']
})
export class ChildComponent {
  pKey:any

  childEmitter = new EventEmitter();

  onChange(val:any){
    console.log(val)
    this.childEmitter.emit(val)
  }
}
