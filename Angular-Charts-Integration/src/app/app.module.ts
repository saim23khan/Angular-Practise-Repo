import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsComponent } from './components/ng-charts/ng-charts.component';
import { ApexChartsComponent } from './components/apex-charts/apex-charts.component';
import { CanvasChartsComponent } from './components/canvas-charts/canvas-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RadialComponent } from './components/apex-charts/charts/radial/radial.component';

@NgModule({
  declarations: [
    AppComponent,
    NgChartsComponent,
    ApexChartsComponent,
    CanvasChartsComponent,
    RadialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
