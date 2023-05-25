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
  // async uploadFile(event:any) {
  //   // @ts-ignore
  //   let file = (event.target as HTMLInputElement).files;
  //   let fileData;
  //   for (let i = 0; i < file!.length; i++) {
  //     // if(file![i]){
  //       fileData = file![i];
  //       let reader = new FileReader();
  //       reader.onload = (fileData) => {
  //         this.imageURL[i] = reader.result?.toString()!;
  //       }
  //       reader.readAsDataURL(fileData);
  //       console.log(fileData);
  //       // await this.upload(file);
  //     // }
  //   }
  // }

  selectedFiles: File[] = [];

  getFileExtension(fileName: string): string {
    return fileName.split('.').pop()?.toLowerCase() || '';
  }

  async onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    for (let i = 0; i < this.selectedFiles.length; i++) {
      await this.upload(this.selectedFiles[i]);
    }
  }

  getSafeUrl(file: File): SafeUrl {
    const url = URL.createObjectURL(file);
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  async upload(file:any){
    let filePath!:string;
    if(this.getFileType(file) === 'image'){
      filePath = `images/${file.name}`;
    }else if(this.getFileType(file) === 'application'){
      if(this.getFileExtension(file.name) === 'pdf'){
        filePath = `files/pdfs/${file.name}`;
      }else if(this.getFileExtension(file.name) === 'docx'){
        filePath = `files/docs/${file.name}`;
      }else if(this.getFileExtension(file.name) === 'xlsx'){
        filePath = `files/excel/${file.name}`;
      }else if(this.getFileExtension(file.name) === 'pptx'){
        filePath = `files/ppt/${file.name}`;
      }
    }
    let task = await this.angularFireStorage.upload(filePath, file);
    let url = await task.ref.getDownloadURL();
    return url != null ? url : '';
  }

  //write function that return type of file
  getFileType(file: File): string {
    return file.type.split('/')[0];
  }
}
