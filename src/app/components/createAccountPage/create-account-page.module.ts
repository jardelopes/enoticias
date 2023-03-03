import { WarningComponent } from './../shared/warning/warning.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAccountComponent,
    WarningComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CreateAccountPageModule { }
