import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.scss']
})
export class NavlistComponent implements OnInit {
  
  items = [
    {name:"Dashboard",icon:"dashboard",ariaL:"",routerlink: "/dashboard"},
    {name:"Public",icon:"public",ariaL:"",routerlink:"/public"},
    {name:"Store",icon:"store",ariaL:"",routerlink:"/store"},
  ] 
  constructor() { }

  ngOnInit(): void {
  }
  
}
