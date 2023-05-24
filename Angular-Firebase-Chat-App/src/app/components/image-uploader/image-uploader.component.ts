import { Component, OnInit, inject } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirebaseStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  imageURL!: string;
  uploadForm: FormGroup;
  constructor(public fb: FormBuilder,private angularFireStorage:AngularFireStorage) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }
  ngOnInit(): void { }

  // Image Preview
  showPreview(event:any) {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file
    });
    // @ts-ignore
    this.uploadForm.get('avatar').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  // Submit Form
  submit() {
    console.log(this.uploadForm.value)
  }
  // private readonly storage: Storage = inject(Storage);

  public url!:string;
  async uploadFile(event:any) {
    const file = event.target.files[0];
    if(file){
      console.log(file);
      // const filePath = `images/${file.name}`;
      // const task = await this.angularFireStorage.upload(filePath, file);
      // const url = await task.ref.getDownloadURL();
      // this.url = url;
    }
  }
}
