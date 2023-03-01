import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
@Input() name!:string;
@Input() college!:string;
@Input() depart!:string;
}
