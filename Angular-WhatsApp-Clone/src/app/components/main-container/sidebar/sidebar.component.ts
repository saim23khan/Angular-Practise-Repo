import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {NgForm} from "@angular/forms";
import { CommonService, RoomData } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  randomSeed : any[] = [];
  roomData: RoomData[] = [];

  constructor(private fireStore: AngularFirestore,
    private firebaseService: CommonService){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value.search);
  }
}
