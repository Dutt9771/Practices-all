import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  name:string="Dutt Mistry";
  date:Date = new Date();
  cars:string[] = ['Hyundai','Volvo','Suzuki']
 Clicked() {
  
  window.location.href="https://google.com"
}
}
