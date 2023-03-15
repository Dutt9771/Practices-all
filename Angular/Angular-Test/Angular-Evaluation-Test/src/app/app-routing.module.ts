import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {path:'',redirectTo:'emi-calculator',pathMatch:'full'},
  {path:'emi-calculator',component:EMICalculatorComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'**',component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
