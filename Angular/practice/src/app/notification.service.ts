import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
Notification=new BehaviorSubject<string>("default")

  constructor() { }
  get_Notification(data:any){
  this.Notification.next(data)
  }
}
