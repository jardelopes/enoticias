import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateAccountComponent } from './create-account/create-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from '../shared/warning/warning.component';
import { CreateAccountRoutingModule } from './create-account-routing.module';



@NgModule({
  declarations: [
    CreateAccountComponent,
    WarningComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAccountRoutingModule
  ]
})
export class CreateAccountPageModule { }
