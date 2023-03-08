import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccessoriesComponent } from './category/accessories/accessories.component';
import { EverythingComponent } from './category/everything/everything.component';
import { MenComponent } from './category/men/men.component';
import { WomenComponent } from './category/women/women.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
 
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
