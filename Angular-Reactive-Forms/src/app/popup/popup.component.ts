import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
	closeResult = '';
  errorMessage = "";
  erorClass = "";
  serverResponce:any;

	constructor(private modalService: NgbModal,private apiService: MasterService) {}
  ngOnInit(): void {
   
  }
  //reactive form
  formGroup = new FormGroup({
    code:new FormControl(),
    name:new FormControl('',Validators.compose([
      Validators.required,
      Validators.minLength(5)
    ])),
    email:new FormControl('',Validators.compose([
      Validators.required,
      Validators.email
    ])),
    phone:new FormControl(),
    designation:new FormControl(),
  });

  saveEmployee() {
    if(this.formGroup.valid){
      //save employee in database
      console.log(this.formGroup.value);
      this.apiService.PostEmployee(this.formGroup.getRawValue()).subscribe(value => {
        this.serverResponce = value;
        console.log(this.serverResponce);
        // if(this.serverResponce == ''){}
      });
    }else{
      this.errorMessage = "Please Enter Valid Data!!";
      this.erorClass = "errormessage";
    }
  }

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  get name(){
    return this.formGroup.get("name");
  }
}
