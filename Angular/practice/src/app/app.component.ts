import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'practice';
  users = [{name : "Dutt",college:"SSEC",depart:"IT"},
  {name : "Kunj",college:"SSEC",depart:"IC"}]

  public list:any[] = [];
  array:any[] =['High','Medium','Low'];
  bgcolor:any[]=['red','green',''] 
  public ADD(item:any,val: any){
      this.list.push({id:this.list.length,name:item,priority:this.array[val],bgcolor:this.bgcolor[val]})
  }
 
}
