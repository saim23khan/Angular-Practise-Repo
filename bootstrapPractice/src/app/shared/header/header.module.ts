import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BootstrapModule} from "../bootstrap/bootstrap.module";
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BootstrapModule,
    RouterModule
  ]
})
export class HeaderModule { }
