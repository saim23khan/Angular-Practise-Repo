import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBooksComponent } from './components/add-books/add-books.component';

const routes: Routes = [
  // { path: '', redirectTo: 'all-books', pathMatch: 'full' },
  { path: 'books', component: AllBooksComponent },
  { path: 'new', component: AddBooksComponent },
  // { path: 'all-books', component: AllBooksComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
