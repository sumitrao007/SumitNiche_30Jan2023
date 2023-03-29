import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {


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
  constructor(private service:HttpService,
            private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(email:string,password:string){
    let obj={
      email:email,
      password:password
    }

    this.service.login(obj)
    .subscribe((response:any)=>{
      console.log(response)

      if(response.msg==='Valid User'){
        //navigate 
        sessionStorage.setItem("username",response.user.username);
          this.router.navigate(["/dashboard"]);
      }else{
        alert("Invalid user")
      }

    })

  }

}
