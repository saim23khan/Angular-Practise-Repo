import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-auther',
  templateUrl: './auther.component.html',
  styleUrls: ['./auther.component.scss']
})
export class AutherComponent implements OnInit {

  // @Input()
  data:number | undefined; 
  
  @Output() myData = new EventEmitter<string>();
  constructor(private _dataService:DataService) { }

  public setData(num:number): void{
    this.data = num;
  }

  public btnClick():void{
    // this.myData.emit('asdasd');
    this._dataService.data = "asdasdasd";
  }

  ngOnInit(): void {
  }

}
