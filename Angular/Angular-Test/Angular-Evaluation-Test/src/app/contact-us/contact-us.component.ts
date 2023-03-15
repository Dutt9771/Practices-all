import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  Contact_us=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern("[- +()0-9]{13}")]),
    message:new FormControl('',[Validators.required])
  })
  get Contact_us_data(){
    return this.Contact_us.controls
  }
  Contact_us_click(){
    console.log(this.Contact_us.value)
  }
}
