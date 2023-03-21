import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserModel } from '../models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseurl=environment.baseurl
name=environment.name
  constructor(private http:HttpClient, private route:Router) { }
  Post_Form_Data(body:any){
  console.log(this.baseurl+this.name)
    this.http.post(this.baseurl+this.name,body,{observe:'response'}).subscribe((res)=>{
      // console.log(res)
    })
    
  }
  user_data:any=[]
  get_Form_Data(){

  try {
    
    // console.log(this.baseurl+this.name)
    return this.http.get(this.baseurl+this.name)
  } catch (error) {
    return error
  }
      }
      userForm:any
  put_Form_Data(userId: string, body: UserModel){

      try {
        return this.http.put<any>(this.baseurl + this.name+"/"+userId, body);
      } catch (error: any) {
        return throwError(() => new Error(error))
      }
    }
 
  
    delete_Form_Data(user:UserModel){
      try {
        // console.log(this.baseurl+this.name)
        return this.http.delete<any>(this.baseurl+this.name+'/'+user.id);
      } catch (error:any) {
        return error
      }
       
      }
      data:any=[]
      get_Data(id: any){
        
        try {
          
          // console.log(this.baseurl+this.name)
          return this.http.get<any>(`${this.baseurl}${this.name}/${id}`)
          // return this.data
          console.log(this.data)
          return this.data
        } catch (error) {
          return error
        }
            }
}
