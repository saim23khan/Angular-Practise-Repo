import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

const modules:any[] = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class MaterialModule { }
