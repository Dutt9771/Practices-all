import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent {
@Input() input_decorator:any;
@Output() event = new EventEmitter<string>()

msg:any ='Hello'
}


