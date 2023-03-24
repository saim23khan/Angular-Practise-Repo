import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import {ButtonModule} from "primeng/button";

const modules:any[] = [
  ChipsModule,
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class PrimngModuleModule { }
