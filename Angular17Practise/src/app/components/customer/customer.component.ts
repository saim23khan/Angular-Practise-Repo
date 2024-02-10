import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../_model/post';
import { Products } from '../../_model/products';
import { MaterialModule } from '../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../_store/Products/Products.Actions';
import { getProductsList } from '../../_store/Products/Products.Selector';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [MaterialModule,CommonModule,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  
  productList!:Products[];
  datasource:any;
  columns = ['Pid','Name','Description','Price','Quantity','CreatedOn','Cid','ProductStatus'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public store:Store) { }
  
  ngOnInit(): void {
    this.loadData();  
  }
  loadData() {
    this.store.dispatch(loadProducts());
    this.store.select(getProductsList).subscribe((data:any)=>{
      this.productList = data;
      this.datasource = new MatTableDataSource(this.productList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }
}
