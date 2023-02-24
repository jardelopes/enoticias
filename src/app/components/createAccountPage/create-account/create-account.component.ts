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

  constructor(private accountFormBuilder :  FormBuilder, private router: Router, private accountService : AccountService){

  }

  ngOnInit(){
    this.accountForm = this.accountFormBuilder.group({
      nome: [null, [Validators.required,Validators.minLength(3)]],
      email: [null, [Validators.required,Validators.email]],
      senha: [null, [Validators.required,Validators.minLength(8)]]
    })
    console.log(this.accountForm)
  }

  createAccount(){
    if(this.accountForm.valid)
      this.accountService.createAccount(this.accountForm)
      this.router.navigate([''])
  }
}