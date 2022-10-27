import { Component, OnInit } from '@angular/core';
import { BooksService } from './service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
