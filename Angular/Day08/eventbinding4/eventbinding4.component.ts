import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding4',
  templateUrl: './eventbinding4.component.html',
  styleUrls: ['./eventbinding4.component.css']
})
export class Eventbinding4Component implements OnInit {

  result:number=0;
  isShow:boolean=true;
  name:string='';
  mysize:number=20;


  constructor() { }

  ngOnInit(): void {
  }

}
