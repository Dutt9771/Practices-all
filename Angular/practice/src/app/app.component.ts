import { style } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'practice';
  input_decor="This Is the Example of Input Decorator"
  Clicked(e: any){
    console.log(e,"object")
  }


  }
  
  
