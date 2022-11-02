import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
	closeResult = '';
  errorMessage = "";
  erorClass = "";

	constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
   
  }
  //reactive form
  formGroup = new FormGroup({
    code:new FormControl({
      value:'',
      disabled:true
    }),
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
