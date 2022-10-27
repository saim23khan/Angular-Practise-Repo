import { Injectable } from '@angular/core';
import { BooksModel } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  public getBooks(): BooksModel[] {
    return [
      {
        "id": 1,
        "title": "Jaffar",
        "totalPages": 100,
        "auther": "J.k",
        "price": {
          "currency": "RS",
          "value": 100
        }
      }
    ];
  }
}
