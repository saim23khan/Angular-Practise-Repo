import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: ProfileComponent,
    path: 'profile',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
