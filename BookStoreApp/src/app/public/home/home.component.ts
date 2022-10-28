import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthComponent } from 'src/app/auth/auth.component';
import { AutherComponent } from 'src/app/shared/components/auther/auther.component';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('authers') private childAuther!: AutherComponent;
  @ViewChild('title') private titleChange!: ElementRef;
  
  constructor(public _dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.childAuther.setData(3);
      this.titleChange.nativeElement.innerHTML = 'hlell'
    },0);
  }

  childData($event: any): void {
    console.log($event)
  }
}
