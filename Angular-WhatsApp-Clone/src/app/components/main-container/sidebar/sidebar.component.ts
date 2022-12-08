import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {NgForm} from "@angular/forms";
import { map } from 'rxjs';
import {  RoomData } from 'src/app/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  randomSeed : any[] = [];
  roomData: RoomData[] = [];

  constructor(private fireStore: Firestore){

  }

  ngOnInit(): void {
  //  console.log(collectionData(collection(this.fireStore,'rooms')))
    collectionData(collection(this.fireStore,'rooms')) 
    .pipe(
      map(actions=>{
        return actions.map((a:any)=>{
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      })
    )
    .subscribe((rooms:RoomData[])=>{
      this.roomData = rooms;
      console.log(this.roomData)
    });

    // collectionData(collection(this.fireStore,'rooms'))
    // .subscribe((rooms:RoomData[])=>{
      
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value.search);
  }
}
