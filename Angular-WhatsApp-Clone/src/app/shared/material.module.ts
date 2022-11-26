import { NgModule } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { asapScheduler, sample } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { sanitizeIdentifier } from '@angular/compiler';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { HttpHandler } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

const modules:any[] = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule
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
