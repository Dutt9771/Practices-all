import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent {
constructor(private _NotifiationService:NotificationService){}

msg:any
  ngOnInit(){
this._NotifiationService.Notification.subscribe(data => {
  this.msg = data
})
}
}
