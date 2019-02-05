import { Injectable } from '@angular/core';
import {Repository} from '../repository';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
// user= new User("")
  repos:Repository;

constructor(private http:HttpClient) { 
  this.repos=new Repository(0,0,0,new Date(),"","");

}

reposRequest(user){
  // console.log(user)

  interface ApiResponse{
      public_repos:number;
      following:number;
      followers:number;
      created_at:Date;
      html_url:string;
      avatar_url:string;
  }
  let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+user.name+'?access_token=' +environment.api_key).toPromise().then(response=>{
          
          this.repos.public_repos=response.public_repos
          this.repos.following=response.following
          this.repos.followers=response.followers
          this.repos.created_at=response.created_at
         this.repos.html_url=response.html_url
         this.repos.avatar_url=response.avatar_url

          resolve()
      },
      error=>{
              // this.quote.quote="Never, never, never give up."
              // this.quote.author="winston churchill"
              reject(error)
              console.log(user.name)
          }
      )
  })
  return promise
}
}
