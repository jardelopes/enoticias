import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'news';
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
