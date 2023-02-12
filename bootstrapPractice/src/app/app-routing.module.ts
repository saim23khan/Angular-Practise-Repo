import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./modules/about/about.component";
import {ProductsComponent} from "./modules/products/products.component";
import {HomeComponent} from "./modules/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule) },
  { path: 'about', component: AboutComponent, loadChildren: () => import('./modules/about/about.module').then(x => x.AboutModule) },
  { path: 'products', component: ProductsComponent, loadChildren: () => import('./modules/products/products.module').then(a => a.ProductsModule) },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
