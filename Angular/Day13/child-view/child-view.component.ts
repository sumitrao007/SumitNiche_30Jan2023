import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit {

  @Input() parentElement!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
