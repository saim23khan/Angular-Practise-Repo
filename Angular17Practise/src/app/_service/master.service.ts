import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../_model/post';
import { Products } from '../_model/products';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(public http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Products[]>('https://localhost:7120/api/Products/GetProducts');
  }
}
