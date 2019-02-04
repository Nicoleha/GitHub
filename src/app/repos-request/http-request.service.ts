import { Injectable } from '@angular/core';
import {Repository} from '../repository';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  repos:Repository;

constructor(private http:HttpClient) { 
  this.repos=new Repository(0,0,0,"");
}

reposRequest(){

  interface ApiResponse{
      repos:number;
      following:number;
      follower:number;
      url:string;

  }
  let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.api_key).toPromise().then(response=>{
          
          this.repos.repos=response.repos
          this.repos.following=response.following
          this.repos.follower=response.follower
          this.repos.url=response.url

          resolve()
      },
      error=>{
              // this.quote.quote="Never, never, never give up."
              // this.quote.author="winston churchill"
              reject(error)
          }
      )
  })

  return promise
}
}
