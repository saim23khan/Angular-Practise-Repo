import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent,canActivate:[RoleGuard]},
  {path:'user',component:UserComponent,canActivate:[RoleGuard]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
