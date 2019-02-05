import { Injectable } from '@angular/core';
import {Repository} from '../repository';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
user= new User("")
  repos:Repository;

constructor(private http:HttpClient) { 
  this.repos=new Repository(0,0,0,"");
}

reposRequest(user){

  interface ApiResponse{
      public_repos:number;
      following:number;
      followers:number;
      public_gists:string;

  }
  let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+this.user.name+'?access_token=' +environment.api_key).toPromise().then(response=>{
          
          this.repos.public_repos=response.public_repos
          this.repos.following=response.following
          this.repos.followers=response.followers
          this.repos.public_gists=response.public_gists

          resolve()
      },
      error=>{
              // this.quote.quote="Never, never, never give up."
              // this.quote.author="winston churchill"
              reject(error)
              console.log(error)
          }
      )
  })

  return promise
}
}
