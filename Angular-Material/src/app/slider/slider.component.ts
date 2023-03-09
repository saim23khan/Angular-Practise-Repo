import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    { imageUrl: 'https://via.placeholder.com/150', title: 'Item 1' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Item 2' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Item 3' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Item 4' },
    { imageUrl: 'https://via.placeholder.com/150', title: 'Item 5' }
  ];
}
