import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {
  // availableProducts!: Product[];

  // selectedProducts!: Product[];

  // draggedProduct!: Product;

  // ngOnInit() {
  //     this.selectedProducts = [];
  //     this.availableProducts = [
  //         {id:'1', name: 'Black Watch'},
  //         {id:'2', name: 'Bamboo Watch'}
  //     ]
  // }

  // dragStart(product: Product) {
  //     this.draggedProduct = product;
  // }

  // drop() {
  //     if (this.draggedProduct) {
  //         let draggedProductIndex = this.findIndex(this.draggedProduct);
  //         this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
  //         this.availableProducts = this.availableProducts.filter((val, i) => i != draggedProductIndex);
  //         // this.draggedProduct = null;
  //     }
  // }

  // dragEnd() {
  //     // this.draggedProduct = null;
  // }

  // findIndex(product: Product) {
  //     let index = -1;
  //     for (let i = 0; i < this.availableProducts.length; i++) {
  //         if (product.id === this.availableProducts[i].id) {
  //             index = i;
  //             break;
  //         }
  //     }
  //     return index;
  // }

  ngOnInit(): void {

  }
  name = 'Angular';

  colors = ['red', 'green', 'white'];

  droped = [];

  dragedColor = null;

  dragStart($event: any, c:any) {
    this.dragedColor = c;
  }

  dragEnd($event:any) {
  }

  drop($event:any) {
    if (this.dragedColor) {
      this.droped.push(this.dragedColor);
      this.dragedColor = null;
    }
  }
}
