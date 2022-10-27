import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../../model/book.model';
import { BooksService } from '../../service/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  public books: BooksModel[] = [];
  constructor(public bookService: BooksService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
