import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  u!: User
  user = new BehaviorSubject<User>(this.u)
  constructor(private accountService : AccountService){}
  ngOnInit(){
      this.user = this.accountService.user
      this.user.subscribe(x =>{
        this.u = x
      })
  }
  logoff(){
    this.accountService.logoff()
  }
}
