import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Role} from "../components/table/table.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RoleService extends ApiService<Role> {
  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = 'http://192.168.1.109:7059/api/';
    this.apiController = 'role';
  }
}
