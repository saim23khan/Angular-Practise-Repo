import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  // headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
  // .set('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS')
  // .set('Access-Control-Allow-Origin', "http://127.0.0.1:4200")
  

  apiUrl = "https://localhost:7006/api/Employee";

  GetEmployee(){
    return this.http.get(this.apiUrl);
  }

  PostEmployee(value:any){
    return this.http.post(this.apiUrl,value);
  }

  GetEmployeeById(id:any){
    return this.http.get(this.apiUrl+id+"/");
  }

  DeleteEmployee(id:any){
    return this.http.delete(this.apiUrl+id+"/");
  }
}
