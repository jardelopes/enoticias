import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/new';
import { ApiService } from 'src/app/services/api.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  news$!: Observable<News[]>;
  @Input()
  queryField = new FormControl()
  constructor(private newsApi: ApiService){}
  ngOnInit(){
    this.news$ = this.newsApi.getArticles()
  }
  search(){
    console.log(this.queryField.value)
    if(this.queryField.value)
      this.news$ = this.newsApi.search(this.queryField.value)
    else
      this.news$ = this.newsApi.getArticles()
  }

}
