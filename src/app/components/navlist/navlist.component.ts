import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navlist',
  templateUrl: './navlist.component.html',
  styleUrls: ['./navlist.component.scss']
})
export class NavlistComponent implements OnInit {
  
  items = [
    {name:"Dashboard",icon:"dashboard",ariaL:""},
    {name:"Public",icon:"public",ariaL:""},
    {name:"Store",icon:"store",ariaL:""},
  ] 
  constructor() { }

  ngOnInit(): void {
  }
  
}
