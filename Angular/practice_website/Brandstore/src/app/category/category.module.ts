import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { EverythingComponent } from './everything/everything.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AccessoriesComponent } from './accessories/accessories.component';


@NgModule({
  declarations: [
    EverythingComponent,
    MenComponent,
    WomenComponent,
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
