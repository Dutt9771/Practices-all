import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {
    path:'',redirectTo:"form",pathMatch:'full'
  },
  {
    path:'form',component:FormComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'users-edit/:id',component:FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
