import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {HeaderModule} from "../../shared/header/header.module";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HeaderModule,
  ]
})
export class AboutModule { }
