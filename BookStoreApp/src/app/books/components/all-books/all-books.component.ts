import { Component, OnInit } from '@angular/core';
import { NavigaterService } from 'src/app/shared/services/navigater.service';
import { BooksModel } from '../../model/book.model';
import { BooksService } from '../../service/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  public books: BooksModel[] = [];
  constructor(public bookService: BooksService,public _navigationService: NavigaterService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
