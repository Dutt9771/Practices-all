import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { NameComponent } from './name/name.component';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { TextDataComponent } from './text-data/text-data.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NameComponent,
    TodoListComponent,
    HomeComponent,
    UsersDetailsComponent,
    DecoratorComponent,
    TextDataComponent,
    NotificationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
