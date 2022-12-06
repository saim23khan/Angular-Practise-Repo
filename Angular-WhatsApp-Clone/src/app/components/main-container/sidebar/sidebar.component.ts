import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    // collection(this.fireStore,'rooms').snapshotChanges()
    // .pipe(
    //   map(actions=>{
    //     return actions.map(a=>{
    //       return {
    //         id:a.payload.doc.id,
    //         //@ts-ignore
    //         ...a.payload.doc.data()
    //       }
    //     })
    //   })
    // ).subscribe((rooms:RoomData[])=>{
    //   this.roomData = rooms;
    //   console.log(this.roomData)
    // });
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value.search);
  }
}
