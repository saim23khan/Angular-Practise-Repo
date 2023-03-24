import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimngModuleModule } from './primng-module/primng-module.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimngModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
