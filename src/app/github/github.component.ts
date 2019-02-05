import { Component, OnInit } from '@angular/core';
import {User}from '../user';
import {HttpClient} from '@angular/common/http';
import {HttpRequestService}from '../repos-request/http-request.service'
import { UserRequestService } from '../user-http/user-request.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers:[HttpRequestService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  Users:User
  addNew(user){
    // this.User.push(User)
    this.Users= new User(user.name)
}
  constructor(private http:HttpClient,private reposRequest:HttpRequestService) { 
    this.Users= new User("")
  }

  ngOnInit() {
  //   this.quoteService.reposRequest()
  //   this.repos=this.quoteService.quote
  // }

}
}