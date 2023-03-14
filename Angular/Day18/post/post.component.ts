import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id!:number;
  title!:string;
  body!:string;
  isHidden:boolean=true;

  posts:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
    this.service.getpost()
    .subscribe((response:any)=>{
      // console.log(response);
      this.posts=response;
    },(myerror)=>{
      // alert("Error Occured")

      if(myerror.status>=400 && myerror.status<=499){
        alert("Client side error "+myerror.status);
      }else if(myerror.status>=500 && myerror.status<=599){
        alert("server side error "+myerror.status);
      }else{
        alert("Unknown error occured");
      }

    })
  }

  onSend(mytitle:any,mybody:any){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.PostData(obj)
      .subscribe((response)=>{
        console.log(response);
      })

  }

  onEdit(post:any){
    this.id=post.id;
    this.title=post.title;
    this.body=post.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response)
      this.isHidden=true;
    })

  }

  onDelete(id:any){
      this.service.DeleteData(id)
      .subscribe((response)=>{
        console.log(response);
      })
  }


}
