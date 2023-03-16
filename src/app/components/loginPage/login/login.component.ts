import { User } from './../../../models/user';
import { AccountService } from './../../../services/account.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginUser!: User
  warning!: boolean
  constructor(private loginFormBuilder :  FormBuilder, private router: Router, private accountService : AccountService){

  }

  ngOnInit(){
    this.warning =false
    this.loginForm = this.loginFormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  login(){
    if(this.accountService.login(this.loginForm))
      this.router.navigate([''])
    else
      this.warning = true
  }
}
