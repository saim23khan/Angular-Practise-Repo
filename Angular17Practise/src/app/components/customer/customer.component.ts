import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../_model/post';
import { Products } from '../../_model/products';
import { MaterialModule } from '../../_module/Material.Module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

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
  constructor(public postService:MasterService) { }
  
  ngOnInit(): void {
    this.loadData();  
  }
  loadData() {
    this.postService.getAllProducts().subscribe((data:any)=>{
      this.productList = data["Data"];
      this.datasource = new MatTableDataSource(this.productList);
    });
  }
}
