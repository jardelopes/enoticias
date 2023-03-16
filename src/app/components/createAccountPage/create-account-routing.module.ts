import { CreateAccountComponent } from './../createAccountPage/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const createAccountRoutes: Routes = [
  {path: '', component: CreateAccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(createAccountRoutes)],
  exports: [RouterModule]
})
export class CreateAccountRoutingModule { }
