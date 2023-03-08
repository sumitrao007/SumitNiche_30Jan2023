import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

    strdetails:string='Hopes so u r enjoying Angular 12 module by Sumit raokhande';
    num2:number=-452.78956324557;

    mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
