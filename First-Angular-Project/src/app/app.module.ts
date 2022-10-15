import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoListItemComponent } from './Components/todo-list-item/todo-list-item.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp( environment.firbase ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
