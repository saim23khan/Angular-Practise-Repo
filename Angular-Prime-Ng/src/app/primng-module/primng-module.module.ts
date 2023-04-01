import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsModule } from 'primeng/chips';
import {ButtonModule} from "primeng/button";
import { DragDropModule } from 'primeng/dragdrop';

const modules:any[] = [
  ChipsModule,
  ButtonModule,
  DragDropModule
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
