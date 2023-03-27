import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  jsonobj:any={};
  dataReceived:string='';

  constructor(private route:ActivatedRoute,
              private Service_notify:NotificationService) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
    this.GetNotificationData();
  }

  GetNotificationData(){
    this.Service_notify.notification
    .subscribe((data)=>{
        this.dataReceived=data;
    })
  }

  GetDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
        this.jsonobj.id=+param.get('id');
        this.jsonobj.fname=param.get('fname');
        this.jsonobj.role=param.get('role');
      })
  }

  onSend(msg:string){
    this.Service_notify.SendMessage(msg);
  }

}
