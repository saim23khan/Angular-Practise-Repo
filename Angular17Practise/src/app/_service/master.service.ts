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

  getProductsById(id:number){
    return this.http.get<Products>('https://localhost:7120/api/Products/GetProduct/'+id);
  }

  postProducts(product:Products){
    return this.http.post('https://localhost:7120/api/Products/AddProduct',product);
  }

  updateProducts(product:Products){
    return this.http.put('https://localhost:7120/api/Products/UpdateProduct',product);
  }

  deleteProducts(id:number){
    return this.http.delete('https://localhost:7120/api/Products/DeleteProduct/'+id);
  }

  hasaccess(){
    return true;
  }
}
