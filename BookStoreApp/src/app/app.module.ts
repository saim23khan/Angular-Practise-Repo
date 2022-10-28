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

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    BooksModule,
    AppRouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
