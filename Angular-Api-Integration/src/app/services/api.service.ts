import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService <T> implements OnInit{
  apiUrl!: string;
  apiController!: string;
  apiEndPoint!: string;
  ngOnInit(): void {
  }

  get apiUrlWithController(): string {
    return this.apiUrl + this.apiController + "/";
  }
  protected constructor(private http: HttpClient) {}

  getAll(endPoint:string): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrlWithController+endPoint);
  }

  getById(id: any,endPoint:string): Observable<T> {
    return this.http.get<T>(`${this.apiUrlWithController+endPoint}/${id}`);
  }

  create(item: T,endPoint:string): Observable<T> {
    return this.http.post<T>(this.apiUrlWithController+endPoint, item);
  }

  update(value: T,id:any,endPoint:string): Observable<T> {
    return this.http.put<T>(`${this.apiUrlWithController+endPoint}/${id}`, value);
  }

  remove(value: T,id:any,endPoint:string): Observable<T> {
    return this.http.put<T>(`${this.apiUrlWithController+endPoint}/${id}`, value);
  }
  delete(id: number,endPoint:string): Observable<any> {
    return this.http.delete(`${this.apiUrlWithController+endPoint}/${id}`);
  }
}
