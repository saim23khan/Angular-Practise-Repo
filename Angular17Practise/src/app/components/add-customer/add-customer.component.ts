import { Component } from '@angular/core';
import { MaterialModule } from '../../_module/Material.Module';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../_model/products';
import { Store } from '@ngrx/store';
import { addProducts } from '../../_store/Products/Products.Actions';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [MaterialModule,RouterLink,ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  constructor(private formBuilder:FormBuilder,private store:Store) { }

  myForm = this.formBuilder.group({
    name: this.formBuilder.control('',Validators.required),
    description: this.formBuilder.control('',Validators.required),
    category: this.formBuilder.control('',Validators.required),
    price: this.formBuilder.control('',Validators.required),
    quantity: this.formBuilder.control('',Validators.required),
    image: this.formBuilder.control('',Validators.required),
  });
  submit() {
    if(this.myForm.valid){
      var product:Products = {
        name: this.myForm.get('name')?.value!,
        description: this.myForm.get('description')?.value!,
        price: parseInt(this.myForm.get('price')?.value!),
        quantity: parseInt(this.myForm.get('quantity')?.value!),
        image: this.myForm.get('image')?.value!,
        cid: parseInt(this.myForm.get('category')?.value!)
      }
      this.store.dispatch(addProducts({inputData:product}));
      console.log(product);
    }
  }
}
