import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  username:string='sumit-raokhande';

  jsonObj={
    id:8,
    fname:'sumit',
    role:'Devops'
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.router.navigate(['/Page2',this.myid]);
  }
  onPage3(){
    this.router.navigate(['/Page3',this.myid,this.username])
  }

  onFollower(){
      this.router.navigate(['/follower']);
  }

  onQueryParam(){
      this.router.navigate(['/Queryparameter'],{
        queryParams:this.jsonObj
      })
  }

}
