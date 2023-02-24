import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';
  user: any
  constructor(){}
  ngOnInit(){
    this.user = sessionStorage.getItem("user")
  }
  logoff(){
    sessionStorage.removeItem("user")
  }
}
