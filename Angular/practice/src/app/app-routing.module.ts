import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';
import { TextDataComponent } from './text-data/text-data.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'body',component:BodyComponent},
  {path:'name',component:NameComponent},
  {path:'name/:id',component:UsersDetailsComponent},
  {path:'todo-list',component:TodoListComponent},
  {path:'text-data',component:TextDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
