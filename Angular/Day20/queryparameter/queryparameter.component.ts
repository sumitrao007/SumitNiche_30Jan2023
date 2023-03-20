import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  jsonobj:any={};

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
  }
  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
        this.jsonobj.id=+param.get('id');
        this.jsonobj.fname=param.get('fname');
        this.jsonobj.role=param.get('role');
      })
  }

}
