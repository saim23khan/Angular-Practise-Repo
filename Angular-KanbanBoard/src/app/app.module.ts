import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import {CdkDropList, DragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import { DynamicKanbanColumnComponent } from './dynamic-kanban-column/dynamic-kanban-column.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    DynamicKanbanColumnComponent,
    KanbanCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
