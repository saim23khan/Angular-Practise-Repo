import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {path:'auth',component: PublicComponent,children:[
    // {path:'login',component: LoginComponent},
    // {path:'signup',component: SignupComponent},
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
