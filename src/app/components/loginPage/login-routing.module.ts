import { CreateAccountComponent } from './../createAccountPage/create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const loginRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'createAccount', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
