import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MasterService } from './master.service';

export const authGuard: CanActivateFn = (route, state) => {
  let service = inject(MasterService);
  let router = inject(Router);
  if(service.hasaccess()){
    return true;
  }else{
    alert("You are not authorized to access this page");
    router.navigate(['']);
    return false;
  }
};
