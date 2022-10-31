import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavigaterService } from 'src/app/shared/services/navigater.service';
import { BooksModel } from '../../model/book.model';
import { BooksService } from '../../service/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit,AfterViewChecked {

  @ViewChild('myForm') myForms!: ElementRef;
  public model!: BooksModel;
  constructor(public _navigationService: Router,private bookService: BooksService) { }

  ngOnInit(): void {
    this.model = new BooksModel();
    this.model.title = '';
    this.model.auther = '';
    this.model.totalPages = 0;
    this.model.price = {
      value: 234,
      currency: 'USD'
    }
  }

  ngAfterViewChecked(): void {
    
  }

  onSubmitForm(): void{
    // const book: BooksModel = new BooksModel();
    // book.title = value.title;
    // book.auther = value.auther;
    // book.totalPages = value.pages;
    // book.price = {
    //   currency: value.currency,
    //   value: value.price,
    // }
    this.bookService.addBooks(this.model);
  }
}

