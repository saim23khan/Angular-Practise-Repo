import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
  ],
  imports: [
    MaterialModule,
  ],
  exports:[
    ToolbarComponent
  ]
})
export class SharedModule { }
