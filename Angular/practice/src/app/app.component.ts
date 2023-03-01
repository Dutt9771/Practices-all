import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  users = [{name : "Dutt",college:"SSEC",depart:"IT"},
  {name : "Kunj",college:"SSEC",depart:"IC"}]
}
