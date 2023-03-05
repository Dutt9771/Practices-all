import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
constructor(private router:ActivatedRoute){

}
ngOnInit(){
  let id = this.router.snapshot.params["id"]
  console.log("Id ",id)
}
}
