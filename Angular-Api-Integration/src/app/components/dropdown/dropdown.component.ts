import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { Role } from '../table/table.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleHandlerService } from 'src/app/services/role-handler.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  roles:Role[] = [];

  constructor(public roleService:RoleHandlerService) { }

  ngOnInit(): void {
    this.roleService.loadDropDown();
  }

  formGroup = new FormGroup({
    roles: new FormControl('', Validators.required)
  });


  submit(): void {
    console.log(this.formGroup.value);
  }
}
