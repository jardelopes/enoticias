import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account : any
  user: any
  constructor() { }

  login(form: any): any{
    let l: boolean = false
    if(localStorage.getItem("accounts")){
      console.log(localStorage.getItem("accounts"))
      this.account = localStorage.getItem("accounts")
      this.account = JSON.parse(this.account?.toString())
      //console.log(JSON.parse(a))
      this.account.forEach((element: any) => {
          if(element.email === form.value.email && element.senha === form.value.senha){
            sessionStorage.setItem("user", JSON.stringify(element))
            l = true
          }
      });
      return l
    }
  }
  createAccount(form: any): any{
    if(localStorage.getItem("accounts")){
      this.account = localStorage.getItem("accounts")
      this.account = this.account = JSON.parse(this.account?.toString())
      if(this.accountExists(form.value.email)){
        return false
      }else
        this.account.push(form.value)
      localStorage.setItem("accounts", JSON.stringify(this.account))
      return true
    }else{
      let array = []
      array.push(form.value)
      localStorage.setItem("accounts", JSON.stringify(array))
      return true
    }
  }

  accountExists(teste: any): boolean{
    let a: boolean
    a = false
    for (let index = 0; index < this.account.length; index++) {
      if(teste === this.account[index].email){
        a = true
        break
      }else{
        a = false
      }
    }
    return a
  }
}
