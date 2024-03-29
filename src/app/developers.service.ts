import { Injectable } from '@angular/core';
import {developer} from './developers';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

 constructor(private http:HttpClient) { }

  url='http://localhost:3000/api/developer/register';
  urlInfo = "http://localhost:3000/verify/data";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  addDevelopers(u:developer): Observable<developer>{
  return this.http.post<developer>(this.url,u,this.httpOptions);
  }

  updateDevelopers(u:developer): Observable<developer>{
    return this.http.put<developer>(this.url,u,this.httpOptions);
    }

  getDevelopers():Observable<developer[]>{
    const newurl='http://localhost:3000/api/developer'
    return this.http.get<developer[]>(newurl,this.httpOptions);
  }

  getName():Observable<any>{
    return this.http.get<any>(this.urlInfo,{params:new HttpParams().append('token',localStorage.getItem('token'))});
  }

}
