import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetialsComponent } from './components/book-detials/book-detials.component';


const routes: Routes = [
  { path: '', redirectTo: 'all-books', pathMatch: 'full' },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'book-details/:id', component: BookDetialsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
