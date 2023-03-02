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

  public list:any[] = [[],[],[]];
  array:any[] =['High','Medium','Low'];
  bgcolor:any[]=['red','green',''] 
  public ADD(item:any,val: any){
    if(val=='0'){
      this.list[0].splice(this.list[0].length,0,({id:this.list.length,name:item,priority:this.array[val],bgcolor:this.bgcolor[val]}))
    }else if(val=='1'){
      // this.list.push({id:this.list.length,name:item,priority:this.array[val],bgcolor:this.bgcolor[val]})
      this.list[1].splice(this.list[1].length,0,({id:this.list.length,name:item,priority:this.array[val],bgcolor:this.bgcolor[val]}))
    }else{
      this.list[2].splice(this.list[2].length,0,({id:this.list.length,name:item,priority:this.array[val],bgcolor:this.bgcolor[val]}))
    }
  }
 
}
