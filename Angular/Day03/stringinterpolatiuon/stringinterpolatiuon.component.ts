import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolatiuon',
  templateUrl: './stringinterpolatiuon.component.html',
  styleUrls: ['./stringinterpolatiuon.component.css']
})
export class StringinterpolatiuonComponent implements OnInit {

  name:string='Sumit Raokhande';
  num1:number=4;
  imgUrl:string="../../assets/bg4.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
