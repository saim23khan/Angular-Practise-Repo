import { Injectable } from '@angular/core';
import { BooksModel } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books = [
    {
      "id": 1,
      "title": "asdasdasd",
      "totalPages": 100,
      "auther": "J.k",
      "price": {
        "currency": "RS",
        "value": 100
      }
    },
    {
      "id": 2,
      "title": "asdasdasd",
      "totalPages": 100,
      "auther": "J.k",
      "price": {
        "currency": "RS",
        "value": 100
      }
    },
    {
      "id": 3,
      "title": "asdasdasd",
      "totalPages": 100,
      "auther": "J.k",
      "price": {
        "currency": "RS",
        "value": 100
      }
    },
    {
      "id": 4,
      "title": "asdasdasd",
      "totalPages": 100,
      "auther": "J.k",
      "price": {
        "currency": "RS",
        "value": 100
      }
    },{
      "id": 5,
      "title": "asdasdasd",
      "totalPages": 100,
      "auther": "J.k",
      "price": {
        "currency": "RS",
        "value": 100
      }
    }
  ];
  constructor() { }

  public addBooks(bookModel: BooksModel):void{
    this.books.push(bookModel);
    console.log(bookModel);
  }
  public getBooks(): BooksModel[] {
    return this.books
  }
}
