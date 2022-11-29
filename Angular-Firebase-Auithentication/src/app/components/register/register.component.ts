import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Auth,createUserWithEmailAndPassword} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth:Auth,private router:Router) {
  }

  formGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  });
  saveEmployee():void{
    console.log(this.formGroup.value)
    createUserWithEmailAndPassword(
      this.auth,
      this.formGroup.value.email,
      this.formGroup.value.password)
      .then((value:any)=>{
        console.log(value);
        alert('Successfully Registered');
        this.formGroup.reset();
        this.router.navigate(['login']);
      }).catch((error:any) => {
        alert(error);
      });
  }
}
