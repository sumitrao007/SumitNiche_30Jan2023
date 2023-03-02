import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-content',
  templateUrl: './parent-content.component.html',
  styleUrls: ['./parent-content.component.css']
})
export class ParentContentComponent implements OnInit {

  strData="<input placeholder='enter the email'>Email id";
  isShow:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  onEmailChange(event:any){
      let temp:string=event.target.value;
      console.log(temp);
      if(temp.length<=20 && temp!='' ){
        console.log("Condition is true");
        this.isShow=true;
      }else{
        console.log("Condition is false");
      }
  }

  onEmailkeyfocus(event:any){
    let temp:string=event.target.value;
    console.log(temp);
    if(temp.length<=20 && temp!='' ){
      console.log("Condition is true");
      this.isShow=true;
    }else{
      console.log("Condition is false");
      this.isShow=false;
    }
  }

}
