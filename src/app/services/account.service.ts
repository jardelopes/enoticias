import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account : any
  user: any
  constructor() { }

  login(formLogin: any): any{
    let l: boolean = false
    if(localStorage.getItem("accounts")){
      console.log(localStorage.getItem("accounts"))
      this.account = localStorage.getItem("accounts")
      this.account = JSON.parse(this.account?.toString())
      this.account.forEach((element: any) => {
          if(element.email === formLogin.value.email && element.senha === formLogin.value.senha){
            sessionStorage.setItem("user", JSON.stringify(element))
            l = true
          }
      });
      return l
    }
  }
  createAccount(accountCreate : User): boolean{
    if(localStorage.getItem("accounts")){
      this.account = localStorage.getItem("accounts")
      this.account = this.account = JSON.parse(this.account?.toString())
      if(this.accountExists(accountCreate.email)){
        return false
      }else
        this.account.push(accountCreate)
      localStorage.setItem("accounts", JSON.stringify(this.account))
      return true
    }else{
      let array = []
      array.push(accountCreate)
      localStorage.setItem("accounts", JSON.stringify(array))
      return true
    }
  }

  accountExists(email: string): boolean{
    let a: boolean
    a = false
    for (let index = 0; index < this.account.length; index++) {
      if(email === this.account[index].email){
        a = true
        return true
        break
      }else{
        a = false
      }
    }
    return a
  }
}
