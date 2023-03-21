import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserModel } from '../models/usermodel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  users:any
  user_data:any=[]
  User_Id:any
  btn="ADD"
  User_Click(){
    this.Routeurl.paramMap.subscribe(params => {
      this.User_Id= params.get('id');
      console.log("ID",this.User_Id)
    })
    console.log(this.User_Id)
    if(this.User_Id){
 this._Userservice.get_Data(this.User_Id).subscribe((response:any) => {
  const responseData = response;
  // console.log(responseData)
  this.userform.setValue({
    name: responseData.name || "",
    email: responseData.email || ""
  })
  console.log('Response:', response),
(error: any) => console.error('Error:', error)
})
}
if(this.User_Id){
  this.btn="Update"
}else{
  this.btn="ADD"
}
}
constructor(private _Userservice:UserService,private route:Router,private Routeurl:ActivatedRoute,private fb:FormBuilder){

}
ngOnInit(){
  this.User_Click()
}

  userform=this.fb.group({
    name: ['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
  })
  get userform_data(){
    return this.userform.controls
  }
 
  
OnSubmit(){
  const formValue = this.userform.getRawValue()
  
 const body: UserModel = {
    name: formValue.name || "",
    email: formValue.email || ""
  }
  console.log(formValue);
  console.log(body)
  if (this.User_Id) {
    this._Userservice.put_Form_Data(this.User_Id, body).subscribe((response) => {
      if (response) {
        console.log("updated", response);
        this.route.navigate(['/users'])
      }
    })
  
  }else{
      this._Userservice.Post_Form_Data(this.userform.value)
      this.route.navigate(['/users'])
    }}
}


