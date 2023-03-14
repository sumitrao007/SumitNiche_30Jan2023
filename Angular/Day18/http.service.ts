import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // url:string='http://jsonplaceholder.typicode.com/posts';
  url:string=environment.baseurl;
  
  constructor(private http:HttpClient) { }


  getpost(){
    return (this.http.get(this.url));
  }

  PostData(obj:any){
      return (this.http.post(this.url,obj));
  }

  UpdateData(obj:any){
    return (this.http.put(`${this.url}/${obj.id}`,obj));
  }

  DeleteData(id:any){
      return (this.http.delete(`${this.url}/${id}`));
  }

}
