import { Injectable } from '@angular/core';
import { Role } from '../components/table/table.component';
import { RoleService } from './role.service';
import { map, pluck } from 'rxjs';

export interface roleMapped {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RoleHandlerService {
  role:Role[] = [];
  roleMapped:roleMapped[] = [];
  constructor(private roleService:RoleService) { }

   loadDropDown(): void {
    this.roleService.getAll('getallroles').subscribe(roles => {
      // Map the Role interface to the roleMapped interface
      // @ts-ignore
      this.roleMapped = roles["Data"].map((role: Role) => {
        return {
          id: role.RoleId,
          name: role.RoleName
        };
      });
      console.log("Roles");
      console.log(this.roleMapped);
    });
  }

}
