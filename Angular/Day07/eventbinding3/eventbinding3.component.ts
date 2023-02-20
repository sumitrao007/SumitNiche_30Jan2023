import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {
 result:number=0;
 myshow:string='password';
 isShow:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

    // this.result=num1+num2;
      this.result=n1+n2;
  }


   onChange(){
    console.log("Change Event Occur.")
   
  }

  onChange1(myname:any){
    console.log("Change Event Occur.")
    console.log(myname)
    let temp=(<string>myname);
    console.log("==> "+temp.length);
  }

  onKeyUp(){
    console.log("key up event Occur..")
  }

  onKeydown(){
    console.log("key Down event Occur..")
  }

  onEnterKey(){
    console.log("Enter key occurs..")
  }

  onShow(){
    if(this.isShow){
      
      this.myshow='text';
    }else{
      this.myshow='password';
       
    }
    this.isShow=!this.isShow;
  }

}
