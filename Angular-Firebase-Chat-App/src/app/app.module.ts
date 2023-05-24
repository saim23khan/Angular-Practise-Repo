import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    // AngularFireStorageModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
