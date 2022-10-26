import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { HowItWorksComponent } from './public/how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule) },
  { path: 'books', component: BooksComponent, loadChildren: () => import('./books/books.module').then(a => a.BooksModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRouteModule { }
