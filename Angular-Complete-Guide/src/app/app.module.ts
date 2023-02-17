import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ListingComponent } from './listing/listing.component';
import { CustomDirective } from './directives/directive/custome.directive';
import { RefractoredDirectiveDirective } from './directives/directive/refractored-directive.directive';
import { ConditionalDirectiveDirective } from './directives/directive/conditional-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    DirectivesComponent,
    CustomDirective,
    ConditionsComponent,
    ListingComponent,
    RefractoredDirectiveDirective,
    ConditionalDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
