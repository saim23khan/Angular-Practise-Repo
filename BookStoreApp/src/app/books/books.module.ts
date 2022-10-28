import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksService } from './service/books.service';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';



@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    BookDetailsComponent,
    RecentBooksComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  // providers: [BooksService]
})
export class BooksModule { }
