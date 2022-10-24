import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detials',
  templateUrl: './book-detials.component.html',
  styleUrls: ['./book-detials.component.css']
})
export class BookDetialsComponent implements OnInit {
  id:number = 0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route);
    this.route.params.subscribe((param) => {
      // console.log(params);
      this.id = param["id"];
    });
  }

}
