import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string='http://jsonplaceholder.typicode.com/posts';
  
  constructor(private http:HttpClient) { }


  getpost(){
    return (this.http.get(this.url));
  }

}
