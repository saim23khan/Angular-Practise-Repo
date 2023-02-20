import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {HeaderServiceService} from "../../service/header-service.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  showFlag = true;

  constructor(private router: Router, private headerService: HeaderServiceService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        console.log(this.showFlag);
        // update the showFlag property based on the current URL
        this.showFlag = this.headerService.shouldShowFlag(event.url);
      }else{
        console.log('not navigation end');
      }
    });
  }
}
