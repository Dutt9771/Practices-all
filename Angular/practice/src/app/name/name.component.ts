import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  [x: string]: any;
  users = [{name : "Dutt",college:"SSEC",depart:"IT"},
  {name : "Kunj",college:"SSEC",depart:"IC"}]

  departments=[
    {id:1,name:'IT'},
    {id:2,name:'IC'},
    {id:3,name:'EC'}
  ]
  constructor(public router:Router){

  }
  user_click(dept:any){
    this.router.navigate(['/name',dept.id])
  }
}
