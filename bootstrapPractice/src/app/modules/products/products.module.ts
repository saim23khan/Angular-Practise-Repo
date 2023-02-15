import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {HeaderModule} from "../../shared/header/header.module";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HeaderModule,
  ]
})
export class ProductsModule { }
