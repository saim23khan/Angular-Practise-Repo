import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Firebase-Chat-App';
  formData!:Observable<any[]>;
  constructor(private firestore:Firestore){
    this.getData();
  }

  addForm(forms: any) {
    const collectionData = collection(this.firestore, 'forms');
    addDoc(collectionData, forms.value).then(() => {
      alert('Form added successfully');
    }).catch((error) => {
        alert('Error adding form: ' + error);
    });
  }

  getData(){
    const collectionInstance = collection(this.firestore, 'forms');
    collectionData(collectionInstance , {idField: 'id'}).subscribe((data:any) => {
      console.log(data);
    });
    this.formData = collectionData(collectionInstance , {idField: 'id'});
    console.log(this.formData);
  }

  updateForm(id:any) {
    const collectionInstance = doc(this.firestore, 'forms',id);
    const updateData = { name: 'Updated Name' };
    updateDoc(collectionInstance, updateData).then(() => {
      alert('Form updated successfully');
    }).catch((error) => {
        alert('Error updating form: ' + error);
    });
  }

  deleteForm(id:any) {
    const collectionInstance = doc(this.firestore, 'forms',id);
    deleteDoc(collectionInstance).then(() => {
      alert('Form deleted successfully');
    }).catch((error) => {
        alert('Error deleting form: ' + error);
    });
  }
}
