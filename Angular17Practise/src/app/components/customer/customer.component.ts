import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../_model/post';
import { Products } from '../../_model/products';
import { MaterialModule } from '../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../_store/Products/Products.Actions';
import { getProductsList } from '../../_store/Products/Products.Selector';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule,CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  
  productList!:Products[];
  datasource:any;
  columns = ['Pid','Name','Description','Price','Quantity','CreatedOn','Cid','ProductStatus'];
  constructor(public store:Store) { }
  
  ngOnInit(): void {
    this.loadData();  
  }
  loadData() {
    this.store.dispatch(loadProducts());
    this.store.select(getProductsList).subscribe((data:any)=>{
      this.productList = data;
      this.datasource = new MatTableDataSource(this.productList);
    });
  }
}
