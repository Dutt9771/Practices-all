import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ipfind',
  templateUrl: './ipfind.component.html',
  styleUrls: ['./ipfind.component.css']
})

export class IpfindComponent {

  constructor(private http:HttpClient) {
    
  }
  ipAddress:any;
  ipInfo:any;

  getIp(){
    this.http.get(`https://ipapi.co/${this.ipAddress}/json/`)
    .subscribe((data)=>{
      this.ipInfo = data;
      console.log(this.ipInfo.city,this.ipInfo.region);
    })
  }
}