import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective1',
  templateUrl: './fordirective1.component.html',
  styleUrls: ['./fordirective1.component.css']
})
export class Fordirective1Component implements OnInit {

  arrproduct=[
      {
        name:'Mototrolla',
        price:30000,
        qty:1
      },
      {
        name:'OnePlus',
        price:45000,
        qty:1
      },
      {
        name:'Oppo',
        price:25000,
        qty:1
      },
      {
        name:'Realme',
        price:18000,
        qty:1
      }
  ];
selected:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    // console.log("onMouseOver Occur ....")
    // console.log(item);
    this.selected=item.name;
  }
  onMouseOut(){
    this.selected='';
  }

  kuchbhi(index:any,item:any){
    return index;
  }

  onGetMore(){
    this.arrproduct=[
      {
        name:'Mototrolla',
        price:35000,
        qty:1
      },
      {
        name:'OnePlus',
        price:45000,
        qty:1
      },
      {
        name:'Oppo',
        price:25000,
        qty:1
      },
      {
        name:'Realme',
        price:18000,
        qty:1
      },
      {
        name:'Samsung',
        price:15000,
        qty:1
      },
      {
        name:'Nokia',
        price:15000,
        qty:1
      }
  ];
  }

}
