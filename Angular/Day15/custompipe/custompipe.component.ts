import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur explicabo repellat exercitationem. Facere vero laudantium tempora. Illo modi ratione quis et dolorum nam, debitis necessitatibus itaque maxime, dignissimos facilis! Dolorem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur explicabo repellat exercitationem. Facere vero laudantium tempora. Illo modi ratione quis et dolorum nam, debitis necessitatibus itaque maxime, dignissimos facilis! Dolorem.'

  searchTerm:string='';
  arrEmp=[
    {
      id:1,
      name:'Sumit',
      status:'active',
      dept:'DevOps',
      country:'india'
    },
    {
      id:2,
      name:'Ashwini',
      status:'active',
      dept:'Development',
      country:'US'
    },
    {
      id:3,
      name:'Jayshree',
      status:'inactive',
      dept:'Admin',
      country:'US'
    },
    {
      id:4,
      name:'Lalit',
      status:'inactive',
      dept:'Marketing',
      country:'Japan'
    },
    {
      id:5,
      name:'Kiran',
      status:'suspend',
      dept:'It',
      country:'Us'
    },
    {
      id:6,
      name:'Spruha',
      status:'suspend',
      dept:'Development',
      country:'Austrila'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
