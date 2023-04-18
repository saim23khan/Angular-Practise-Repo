import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {RoleService} from "../../services/role.service";
import {RoleFormComponent} from "../role-form/role-form.component";
import {MatTableDataSource} from "@angular/material/table";
import {mergeMap} from "rxjs";

export interface Role {
  RoleId: number;
  RoleName: string;
}

export const displayedColumns: string[] = ['RoleId', 'RoleName', 'RoleStatus', 'RoleCreatedAt', 'RoleEditedAt'];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit{
  roles: Role[] = [];

  constructor(private dialog: MatDialog, private roleService: RoleService,private changeDetectorRefs: ChangeDetectorRef) {}

  dataSource = new MatTableDataSource<Role>();

  ngOnInit(): void {
    this.roleService.getAll('getallroles').subscribe((roles) => {
      // @ts-ignore
      this.dataSource.data = roles["Data"];
    });
  }

  getRoles(): void {
    this.roleService.getAll('getallroles').subscribe(roles => {
      // @ts-ignore
      console.log(roles["Data"])
    });
    this.roleService.getAll('getallroles')
      .subscribe(rolesData => {
        // @ts-ignore
        this.roles = rolesData["Data"];
      });
    console.log(this.roles)
  }

  openDialog(role?: Role): void {
    const dialogRef = this.dialog.open(RoleFormComponent, {
      width: '400px',
      data: { role }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeDetectorRefs.detectChanges();
      if (result) {
        if (role) {
          this.updateRole(result);
        } else {
          this.createRole(result);
        }
      }
    });
  }

  createRole(role: Role): void {
    this.roleService.create(role,'addRole')
      .pipe(
        mergeMap(() => this.roleService.getAll('getAllRoles'))
      ).subscribe(
      (rolesData) => {
        // @ts-ignore
        this.roles = rolesData["Data"];
        this.changeDetectorRefs.detectChanges();
      }
    )
  }

  updateRole(role: Role): void {
    this.roleService.update(role, role.RoleId,'updateRole')
      .subscribe(updatedRole => {
        const index = this.roles.findIndex(r => r.RoleId === updatedRole.RoleId);
        if (index !== -1) {
          this.roles[index] = updatedRole;
        }
      });
  }

  deleteRole(role: Role): void {
    if (role.RoleId != null) {
      this.roleService.delete(role.RoleId,'removeRole')
        .subscribe(() => {
          this.roles = this.roles.filter(r => r !== role);
        });
    }
  }

  protected readonly displayedColumns = displayedColumns;
}
