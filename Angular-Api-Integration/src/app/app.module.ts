import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { RoleFormComponent } from './components/role-form/role-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RoleFormComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
