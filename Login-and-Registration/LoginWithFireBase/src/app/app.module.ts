import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

//Angular Fire Imports File for Firebase functions

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/auth/registration/registration.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { DashboardComponent } from './Components/home/dashboard/dashboard.component';
import { IndexComponent } from './Components/home/index/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firbase),
    AngularFireAuthModule,
    AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
