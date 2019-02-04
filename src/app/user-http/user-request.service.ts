import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user'
@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

user:User;

constructor(private http:HttpClient) { 
  this.user=new User(0,"");
}

userRequest(){

  interface ApiResponse{
      id:number;
      name:string

  }
  let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.api_key).toPromise().then(response=>{
          
          this.user.id=response.id
          this.user.name=response.name

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