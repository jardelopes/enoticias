import { CreateAccountPageModule } from './../createAccountPage/create-account-page.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarningComponent } from '../shared/warning/warning.component';


@NgModule({
  declarations: [
    LoginComponent,
    WarningComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule{ }
