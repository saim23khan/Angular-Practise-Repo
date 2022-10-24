import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
