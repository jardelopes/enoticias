import { HomeComponent } from './components/home/home.component';
import { LoginModule } from './components/loginPage/login.module';
import { LoginRoutingModule } from './components/loginPage/login-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './components/createAccountPage/create-account/create-account.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //{path:'createAccount', component: CreateAccountComponent},
  {
    path:'login',
    loadChildren: () => import('src/app/components/loginPage/login.module').then(m => m.LoginModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
