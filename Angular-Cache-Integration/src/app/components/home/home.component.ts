import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/service/cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cacheData!:any;
  data!:any;
  constructor(private cacheService:CacheService) { }

  ngOnInit() {
    this.cacheData =[
      {
        name:'Raj',
        age: 25
      },
    ];
    this.cacheService.storeCache(this.cacheData);
  }

  onClick(){
    this.cacheService.getCache().then(data=>{
      this.data = data;
      console.log(this.data);
    });
  }

  onClickClear(){
    this.cacheService.clearCache('my-app-cache');
  }
}
