import { Component, OnInit, inject } from '@angular/core';
import { async } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirebaseStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  imageURL: string[] = [];
  uploadForm: FormGroup;
  constructor(public fb: FormBuilder,private angularFireStorage:AngularFireStorage,private sanitizer: DomSanitizer) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: ['']
    })
  }
  ngOnInit(): void { }

  // Image Preview

  public url!:string;
  async uploadFile(event:any) {
    // @ts-ignore
    let file = (event.target as HTMLInputElement).files;
    let fileData;
    for (let i = 0; i < file!.length; i++) {
      // if(file![i]){
        fileData = file![i];
        let reader = new FileReader();
        reader.onload = (fileData) => {
          this.imageURL[i] = reader.result?.toString()!;
        }
        reader.readAsDataURL(fileData);
        console.log(fileData);
        // await this.upload(file);
      // }
    }
  }

  selectedFiles: File[] = [];

  getFileExtension(fileName: string): string {
    return fileName.split('.').pop()?.toLowerCase() || '';
  }

  async onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    for (let i = 0; i < this.selectedFiles.length; i++) {
      console.log(this.getFileType(this.selectedFiles[i]));
      // await this.upload(this.selectedFiles[i]);ss
    }
  }

  getSafeUrl(file: File): SafeUrl {
    const url = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  async upload(file:any){
    const filePath = `images/${file.name}`;
    const task = await this.angularFireStorage.upload(filePath, file);
    const url = await task.ref.getDownloadURL();
    this.url = url;
  }

  //write function that return type of file
  getFileType(file: File): string {
    return file.type.split('/')[0];
  }
}
