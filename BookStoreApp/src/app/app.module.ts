import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { HowItWorksComponent } from './public/how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HowItWorksComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    BooksModule,
    AppRouteModule,
  ],
  exports:[
    // HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
