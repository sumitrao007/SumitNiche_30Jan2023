import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['.net','c#','mysql','Angular 12','AWS','jenkings'];
  constructor() { }

  ngOnInit(): void {
  }

}
