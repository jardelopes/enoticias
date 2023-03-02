import { HttpClient } from '@angular/common/http';
import { News } from './../models/new';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_key= "1e2b0f1f69bb41e3a505ac7085172f83"
  field: string = '';
  exit!: Observable<any>;
  constructor(private http: HttpClient) {  }


  getSources(){
    return this.http.get<News[]>('https://newsapi.org/v2/sources?country=br&apiKey='+ this.api_key).pipe(
      map(
        (res: any) =>{
          console.log(res)
          return res.articles;
        }
      )
    )
  }
  getArticles(){
   return this.http.get<News[]>('https://newsapi.org/v2/top-headlines?country=br&apiKey='+ this.api_key).pipe(
      map(
        (res: any) =>{
          console.log(res)
            return res.articles;
        }
      )
    )
  }
  search(field: string){
      return this.http.get<News[]>('https://newsapi.org/v2/everything?q='+ field +'&apiKey='+ this.api_key).pipe(
        map(
          (res: any) =>{
            console.log(res)
            return res.articles;
          }
        )
      )
  }
}
