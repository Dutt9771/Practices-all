import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-text-data',
  templateUrl: './text-data.component.html',
  styleUrls: ['./text-data.component.css']
})
export class TextDataComponent {
  constructor(private _NotificationService:NotificationService){}

  SendNow(msg:any){
    this._NotificationService.Notification.next(msg.value)
  }
}
