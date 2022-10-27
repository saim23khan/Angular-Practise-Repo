import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';



@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    BooksRoutingModule
  ]
})
export class BooksModule { }
