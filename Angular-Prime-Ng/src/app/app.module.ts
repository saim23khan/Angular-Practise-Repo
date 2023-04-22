import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimngModuleModule } from './primng-module/primng-module.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragDropModule } from 'primeng/dragdrop';
import { ChipsComponent } from './components/chips/chips.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent,
    ChipsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // PrimngModuleModule,
    DragDropModule,
    PrimngModuleModule,
    FormsModule,
    AutoCompleteModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
