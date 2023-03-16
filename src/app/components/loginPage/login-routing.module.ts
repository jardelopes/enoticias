import { CreateAccountComponent } from './../createAccountPage/create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const loginRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'createAccount', loadChildren: () => import('src/app/components/createAccountPage/create-account-page.module').then(m => m.CreateAccountPageModule)}
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
