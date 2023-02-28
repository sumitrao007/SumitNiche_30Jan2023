import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strdata:string='Send data from parent...';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  dob!:any;

  @Input() appMsg:string='';

  ChildStrdata:string='';
  ChildArrObj:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSend(inputdate:any){
    this.dob=inputdate;
  }

}
