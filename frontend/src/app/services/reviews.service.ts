import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  message:any;
  constructor(private http:HttpClient) { }
  getDataApi(){
    this.http.get('http://localhost:')
  }
}
