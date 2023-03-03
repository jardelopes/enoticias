import { User } from './../../../models/user';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  accountForm!: FormGroup;
  accountUser!: User;
  warning!: boolean

  constructor(private accountFormBuilder :  FormBuilder, private router: Router, private accountService : AccountService){

  }

  ngOnInit(){
    this.warning = false
    this.accountForm = this.accountFormBuilder.group({
      nome: [null, [Validators.required,Validators.minLength(3)]],
      email: [null, [Validators.required,Validators.email]],
      senha: [null, [Validators.required,Validators.minLength(8)]]
    })
    console.log(this.accountForm)
  }

  createAccount(){
    this.accountUser = this.accountForm.value
    if(this.accountForm.valid){
      if(this.accountService.createAccount(this.accountUser))
        this.router.navigate([''])
      else
        this.warning = true
    }
  }
}
