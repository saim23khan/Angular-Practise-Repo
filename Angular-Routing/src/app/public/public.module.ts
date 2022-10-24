import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetialsComponent } from './components/book-detials/book-detials.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    PublicComponent,
    AllBooksComponent,
    BookDetialsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
