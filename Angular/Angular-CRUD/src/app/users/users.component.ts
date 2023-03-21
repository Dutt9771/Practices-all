import { Component,OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/usermodel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  user_data:any=[]
  GetAllUser(){
   this._Userservice.get_Form_Data().subscribe((res: any)=>{
      this.user_data.push(res)  
    })
    return this.user_data
  //  console.log(this.user_data)
  }

constructor(private _Userservice:UserService,private route:Router,private Routeurl:ActivatedRoute){

  this.GetAllUser()
}
ngOnInit():void{

 this.GetAllUser()

}

username:any
useremail:any
edit:any=[]
User_Id:any
Edit(id:any){
  console.log(id)
  this.route.navigate(['/users-edit/',id])
  this.GetAllUser()
}

Delete(user:UserModel){
  console.log(user.id)
    console.log("delete event is fire");
    this._Userservice.delete_Form_Data(user).subscribe((response:any) => {
      if (response) {
        this.user_data[0].splice(user.id-1, 1);
        // console.log(this.user_data);
        
      }
    })
  }
}

