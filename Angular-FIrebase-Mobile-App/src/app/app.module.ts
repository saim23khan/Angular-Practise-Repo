import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/auth/registration/registration.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { DashboardComponent } from './Components/home/dashboard/dashboard.component';
import { IndexComponent } from './Components/home/index/index.component';
import { FormsModule } from '@angular/forms';
import {provideFirebaseApp,initializeApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import { FirestoreModule } from '@angular/fire/firestore';
import {getAuth, provideAuth} from "@angular/fire/auth";
// import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FirestoreModule,
    provideAuth(() => getAuth()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
